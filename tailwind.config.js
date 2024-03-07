/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme:
      {
        extend: {
          colors: {
            //'navbar': '#151147'
            'navbar': {
              DEFAULT: 'var(--color-navbar)',
              'text': 'var(--color-navbar-text)',
              'svg-fill': 'var(--color-navbar-svg-fill)'
            },
            'main': {
              'background': 'var(--color-main-background)',
              'text': 'var(--color-text)',
              'header-border': 'var(--color-main-header-border)'
            },
            'second': {
              'background': 'var(--color-second-background)'
            },
            'table': {
              'header-background': 'var(--color-table-header-background)',
              'header-text': 'var(--color-table-header-text)',
              'body-background': 'var(--color-table-body-background)',
              'hover': 'var(--color-table-hover)',
              'input-background': 'var(--color-table-input-background)'
            },
            'portfolio': {
              'stats-background': 'var(--color-portfolio-stats-background)'
            },
            'portfolio-badge': {
              'background': 'var(--color-portfolio-badge-background)',
              'text': 'var(--color-portfolio-badge-text)',
            },
            'pagination': {
              'background': 'var(--color-pagination-background)',
              'hover': 'var(--color-pagination-hover)',
              'active': 'var(--color-pagination-active)',
              'text': 'var(--color-pagination-text)'
            },
            'dialog': {
              'background': 'var(--color-dialog-background)'
            },
            'dropdown': {
              'background': 'var(--color-dropdown-background)',
              'text': 'var(--color-dropdown-text)',
              'hover': 'var(--color-dropdown-hover)',
              'active': 'var(--color-dropdown-active)'
            }
          }
        }
      },
  plugins: [require("daisyui")]
}