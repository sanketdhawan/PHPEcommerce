import { Component } from '@angular/core';
import { MediaService } from '../../_services/media.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbAlertModule],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  selectedFile: File | null = null;
  mediaList: any[] = [];
  deleteId: number | null = null;
  uploadSuccess: boolean = false;
  deleteSuccess: boolean = false;

  // Dynamic file type mapping
  fileTypeCategories: { [key: string]: string[] } = {
    images: ['jpeg', 'jpg', 'gif', 'png', 'webp'],
    videos: ['mp4', 'mkv', 'webm', 'avi', 'mov'],
    pdf: ['pdf'],
    csv: ['csv'],
    html: ['html', 'htm'],
    others: [],
  };

  constructor(
    private mediaService: MediaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadMedia();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.mediaService.uploadFile(this.selectedFile).subscribe((response) => {
        this.uploadSuccess = true;
        this.loadMedia();
      });
    } else {
      console.log('No file selected.');
    }
  }

  openDeleteModal(content: any, id: number | null = null): void {
    if (id) {
      this.deleteId = id;
    }
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.confirmDelete(result);
        },
        (reason) => {
          this.getDismissReason(reason);
        }
      );
  }

  confirmDelete(modal: any): void {
    if (this.deleteId !== null) {
      this.mediaService.deleteFile(this.deleteId).subscribe((response) => {
        this.deleteSuccess = true;
        this.loadMedia();
        modal.dismiss();
      });
    } else {
      console.log('No file ID provided.');
    }
  }

  loadMedia(): void {
    this.mediaService.getMedia().subscribe((data) => {
      this.mediaList = data;
    });
  }

  getFileType(filePath: string): string {
    const extension = filePath.split('.').pop()?.toLowerCase();
    for (const [type, extensions] of Object.entries(this.fileTypeCategories)) {
      if (extensions.includes(extension!)) {
        return type;
      }
    }
    return 'others';
  }

  isImage(filePath: string): boolean {
    return this.getFileType(filePath) === 'images';
  }

  isPdf(filePath: string): boolean {
    return this.getFileType(filePath) === 'pdf';
  }

  isCsv(filePath: string): boolean {
    return this.getFileType(filePath) === 'csv';
  }

  isHtml(filePath: string): boolean {
    return this.getFileType(filePath) === 'html';
  }

  isVideo(filePath: string): boolean {
    return this.getFileType(filePath) === 'videos';
  }

  isOther(filePath: string): boolean {
    return this.getFileType(filePath) === 'others';
  }

  getDismissReason(reason: any): void {
    if (reason === ModalDismissReasons.ESC) {
      console.log('Modal dismissed by pressing ESC');
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('Modal dismissed by clicking on the backdrop');
    } else {
      console.log(`Modal dismissed with: ${reason}`);
    }
  }
}
