// const withSass = require('@zeit/next-sass');
//
// module.exports = withSass();


module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  generateBuildId: async () => {
    return require('child_process')
        .execSync('git rev-parse HEAD')
        .toString().trim();
  },
  images: {
    domains: ['www.frc.org','frc.org','frcaction.org','www.frcaction.org','www.frcblog.com']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}
