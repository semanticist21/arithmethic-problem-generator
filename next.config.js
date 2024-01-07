/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack(config, {buildId, dev, isServer, defaultLoaders, webpack}) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Modify existing configuration to add the new loader
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|doc?x)$/i, // Regex for .docx files
        use: [
          {
            loader: 'file-loader', // Specifies the loader
            options: {
              name: '[path][name].[ext]', // Output name format
            },
          },
        ],
      })
    }

    return config
  },
}

module.exports = nextConfig
