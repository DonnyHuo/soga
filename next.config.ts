import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // 排除 ?url 导入
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    });

    // 处理 ?url 导入的 SVG
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/
    });

    return config;
  }
};

export default nextConfig;
