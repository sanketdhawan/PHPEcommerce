export interface SidebarItem {
  title: string;
  icon?: string;
  link?: string;
  children?: SidebarItem[];
  isActive?: boolean;
  isOpen?: boolean;
  isAuthenticated?: boolean;
}
export const SIDEBAR_MENU = [
  {
    title: 'Dashboard',
    icon: 'feather-home',
    link: '',
  },
  {
    title: 'Products',
    icon: 'feather-box',
    children: [
      {
        title: 'Physical',
        children: [
          { title: 'Category', link: 'add-category' },
          { title: 'Sub Category', link: 'category-sub.html' },
          { title: 'Product List', link: 'product-list.html' },
          { title: 'Product Detail', link: 'product-detail.html' },
          { title: 'Add Product', link: 'add-product.html' },
        ],
      },
      // {
      //   title: 'Digital',
      //   children: [
      //     { title: 'Category', link: 'category-digital.html' },
      //     { title: 'Sub Category', link: 'category-digitalsub.html' },
      //     { title: 'Product List', link: 'product-listdigital.html' },
      //     { title: 'Add Product', link: 'add-digital-product.html' },
      //   ],
      // },
      // { title: 'Product Review', link: 'product-review.html' },
    ],
  },
  {
    title: 'Orders',
    icon: 'feather-archive',
    isOpen: true,
    children: [
      { title: 'Order List', link: 'order-list.html' },
      { title: 'Order Tracking', link: 'order-tracking.html' },
      { title: 'Order Details', link: 'order-detail.html' },
    ],
  },
  // {
  //   title: 'Sales',
  //   icon: 'feather-dollar-sign',
  //   children: [
  //     { title: 'Orders', link: 'order.html' },
  //     { title: 'Transactions', link: 'transactions.html' },
  //   ],
  // },
  {
    title: 'Coupons',
    icon: 'feather-tag',
    children: [
      { title: 'List Coupons', link: 'coupon-list.html' },
      { title: 'Create Coupons', link: 'coupon-create.html' },
    ],
  },
  {
    title: 'Pages',
    icon: 'feather-clipboard',
    children: [
      { title: 'List Page', link: 'pages-list.html' },
      { title: 'Create Page', link: 'page-create.html' },
    ],
  },
  {
    title: 'Media',
    icon: 'feather-camera',
    link: 'media',
  },
  {
    title: 'Menus',
    icon: 'feather-align-left',
    children: [
      { title: 'Menu Lists', link: 'menu-list.html' },
      { title: 'Create Menu', link: 'create-menu.html' },
    ],
  },
  {
    title: 'Users',
    icon: 'feather-user-plus',
    children: [
      { title: 'User List', link: 'user-list.html' },
      { title: 'Create User', link: 'create-user.html' },
    ],
  },
  {
    title: 'Vendors',
    icon: 'feather-users',
    children: [
      { title: 'Vendor List', link: 'list-vendor.html' },
      { title: 'Create Vendor', link: 'create-vendors.html' },
    ],
  },
  // {
  //   title: 'Localization',
  //   icon: 'feather-chrome',
  //   children: [
  //     { title: 'Translations', link: 'translations.html' },
  //     { title: 'Currency Rates', link: 'currency-rates.html' },
  //     { title: 'Taxes', link: 'taxes.html' },
  //   ],
  // },
  // {
  //   title: 'Support Ticket',
  //   icon: 'feather-phone',
  //   link: 'support-ticket.html',
  // },
  // {
  //   title: 'Reports',
  //   icon: 'feather-bar-chart',
  //   link: 'reports.html',
  // },
];
