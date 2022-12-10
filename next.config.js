const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?/,
  options: {
      providerImportSource: '@mdx-js/react'
  }
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})
