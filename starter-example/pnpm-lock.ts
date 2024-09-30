lockfileVersion: '6.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

dependencies:
  '@heroicons/react':
    specifier: ^2.1.4
    version: 2.1.4(react@19.0.0-rc-f38c22b244-20240704)
  '@tailwindcss/forms':
    specifier: ^0.5.7
    version: 0.5.7(tailwindcss@3.4.4)
  '@vercel/postgres':
    specifier: ^0.8.0
    version: 0.8.0
  autoprefixer:
    specifier: 10.4.19
    version: 10.4.19(postcss@8.4.38)
  bcrypt:
    specifier: ^5.1.1
    version: 5.1.1
  clsx:
    specifier: ^2.1.1
    version: 2.1.1
  next:
    specifier: 15.0.0-canary.56
    version: 15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704)(react@19.0.0-rc-f38c22b244-20240704)
  next-auth:
    specifier: 5.0.0-beta.19
    version: 5.0.0-beta.19(next@15.0.0-canary.56)(react@19.0.0-rc-f38c22b244-20240704)
  postcss:
    specifier: 8.4.38
    version: 8.4.38
  react:
    specifier: 19.0.0-rc-f38c22b244-20240704
    version: 19.0.0-rc-f38c22b244-20240704
  react-dom:
    specifier: 19.0.0-rc-f38c22b244-20240704
    version: 19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704)
  tailwindcss:
    specifier: 3.4.4
    version: 3.4.4
  typescript:
    specifier: 5.5.2
    version: 5.5.2
  use-debounce:
    specifier: ^10.0.1
    version: 10.0.1(react@19.0.0-rc-f38c22b244-20240704)
  zod:
    specifier: ^3.23.8
    version: 3.23.8

devDependencies:
  '@types/bcrypt':
    specifier: ^5.0.2
    version: 5.0.2
  '@types/node':
    specifier: 20.14.8
    version: 20.14.8
  '@types/react':
    specifier: 18.3.3
    version: 18.3.3
  '@types/react-dom':
    specifier: 18.3.0
    version: 18.3.0

packages:

  /@alloc/quick-lru@5.2.0:
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}
    dev: false

  /@auth/core@0.32.0:
    resolution: {integrity: sha512-3+ssTScBd+1fd0/fscAyQN1tSygXzuhysuVVzB942ggU4mdfiTbv36P0ccVnExKWYJKvu3E2r3/zxXCCAmTOrg==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      nodemailer: ^6.8.0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true
    dependencies:
      '@panva/hkdf': 1.2.0
      '@types/cookie': 0.6.0
      cookie: 0.6.0
      jose: 5.4.1
      oauth4webapi: 2.11.1
      preact: 10.11.3
      preact-render-to-string: 5.2.3(preact@10.11.3)
    dev: false

  /@emnapi/runtime@1.2.0:
    resolution: {integrity: sha512-bV21/9LQmcQeCPEg3BDFtvwL6cwiTMksYNWQQ4KOxCZikEGalWtenoZ0wCiukJINlGCIi2KXx01g4FoH/LxpzQ==}
    requiresBuild: true
    dependencies:
      tslib: 2.6.3
    dev: false
    optional: true

  /@heroicons/react@2.1.4(react@19.0.0-rc-f38c22b244-20240704):
    resolution: {integrity: sha512-ju0wj0wwrUTMQ2Yceyrma7TKuI3BpSjp+qKqV81K9KGcUHdvTMdiwfRc2cwXBp3uXtKuDZkh0v03nWOQnJFv2Q==}
    peerDependencies:
      react: '>= 16'
    dependencies:
      react: 19.0.0-rc-f38c22b244-20240704
    dev: false

  /@img/sharp-darwin-arm64@0.33.4:
    resolution: {integrity: sha512-p0suNqXufJs9t3RqLBO6vvrgr5OhgbWp76s5gTRvdmxmuv9E1rcaqGUsl3l4mKVmXPkTkTErXediAui4x+8PSA==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.0.2
    dev: false
    optional: true

  /@img/sharp-darwin-x64@0.33.4:
    resolution: {integrity: sha512-0l7yRObwtTi82Z6ebVI2PnHT8EB2NxBgpK2MiKJZJ7cz32R4lxd001ecMhzzsZig3Yv9oclvqqdV93jo9hy+Dw==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.0.2
    dev: false
    optional: true

  /@img/sharp-libvips-darwin-arm64@1.0.2:
    resolution: {integrity: sha512-tcK/41Rq8IKlSaKRCCAuuY3lDJjQnYIW1UXU1kxcEKrfL8WR7N6+rzNoOxoQRJWTAECuKwgAHnPvqXGN8XfkHA==}
    engines: {macos: '>=11', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-darwin-x64@1.0.2:
    resolution: {integrity: sha512-Ofw+7oaWa0HiiMiKWqqaZbaYV3/UGL2wAPeLuJTx+9cXpCRdvQhCLG0IH8YGwM0yGWGLpsF4Su9vM1o6aer+Fw==}
    engines: {macos: '>=10.13', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-linux-arm64@1.0.2:
    resolution: {integrity: sha512-x7kCt3N00ofFmmkkdshwj3vGPCnmiDh7Gwnd4nUwZln2YjqPxV1NlTyZOvoDWdKQVDL911487HOueBvrpflagw==}
    engines: {glibc: '>=2.26', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-linux-arm@1.0.2:
    resolution: {integrity: sha512-iLWCvrKgeFoglQxdEwzu1eQV04o8YeYGFXtfWU26Zr2wWT3q3MTzC+QTCO3ZQfWd3doKHT4Pm2kRmLbupT+sZw==}
    engines: {glibc: '>=2.28', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-linux-s390x@1.0.2:
    resolution: {integrity: sha512-cmhQ1J4qVhfmS6szYW7RT+gLJq9dH2i4maq+qyXayUSn9/3iY2ZeWpbAgSpSVbV2E1JUL2Gg7pwnYQ1h8rQIog==}
    engines: {glibc: '>=2.28', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-linux-x64@1.0.2:
    resolution: {integrity: sha512-E441q4Qdb+7yuyiADVi5J+44x8ctlrqn8XgkDTwr4qPJzWkaHwD489iZ4nGDgcuya4iMN3ULV6NwbhRZJ9Z7SQ==}
    engines: {glibc: '>=2.26', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-linuxmusl-arm64@1.0.2:
    resolution: {integrity: sha512-3CAkndNpYUrlDqkCM5qhksfE+qSIREVpyoeHIU6jd48SJZViAmznoQQLAv4hVXF7xyUB9zf+G++e2v1ABjCbEQ==}
    engines: {musl: '>=1.2.2', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-libvips-linuxmusl-x64@1.0.2:
    resolution: {integrity: sha512-VI94Q6khIHqHWNOh6LLdm9s2Ry4zdjWJwH56WoiJU7NTeDwyApdZZ8c+SADC8OH98KWNQXnE01UdJ9CSfZvwZw==}
    engines: {musl: '>=1.2.2', npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-linux-arm64@0.33.4:
    resolution: {integrity: sha512-2800clwVg1ZQtxwSoTlHvtm9ObgAax7V6MTAB/hDT945Tfyy3hVkmiHpeLPCKYqYR1Gcmv1uDZ3a4OFwkdBL7Q==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.0.2
    dev: false
    optional: true

  /@img/sharp-linux-arm@0.33.4:
    resolution: {integrity: sha512-RUgBD1c0+gCYZGCCe6mMdTiOFS0Zc/XrN0fYd6hISIKcDUbAW5NtSQW9g/powkrXYm6Vzwd6y+fqmExDuCdHNQ==}
    engines: {glibc: '>=2.28', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.0.2
    dev: false
    optional: true

  /@img/sharp-linux-s390x@0.33.4:
    resolution: {integrity: sha512-h3RAL3siQoyzSoH36tUeS0PDmb5wINKGYzcLB5C6DIiAn2F3udeFAum+gj8IbA/82+8RGCTn7XW8WTFnqag4tQ==}
    engines: {glibc: '>=2.31', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.0.2
    dev: false
    optional: true

  /@img/sharp-linux-x64@0.33.4:
    resolution: {integrity: sha512-GoR++s0XW9DGVi8SUGQ/U4AeIzLdNjHka6jidVwapQ/JebGVQIpi52OdyxCNVRE++n1FCLzjDovJNozif7w/Aw==}
    engines: {glibc: '>=2.26', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.0.2
    dev: false
    optional: true

  /@img/sharp-linuxmusl-arm64@0.33.4:
    resolution: {integrity: sha512-nhr1yC3BlVrKDTl6cO12gTpXMl4ITBUZieehFvMntlCXFzH2bvKG76tBL2Y/OqhupZt81pR7R+Q5YhJxW0rGgQ==}
    engines: {musl: '>=1.2.2', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.2
    dev: false
    optional: true

  /@img/sharp-linuxmusl-x64@0.33.4:
    resolution: {integrity: sha512-uCPTku0zwqDmZEOi4ILyGdmW76tH7dm8kKlOIV1XC5cLyJ71ENAAqarOHQh0RLfpIpbV5KOpXzdU6XkJtS0daw==}
    engines: {musl: '>=1.2.2', node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.0.2
    dev: false
    optional: true

  /@img/sharp-wasm32@0.33.4:
    resolution: {integrity: sha512-Bmmauh4sXUsUqkleQahpdNXKvo+wa1V9KhT2pDA4VJGKwnKMJXiSTGphn0gnJrlooda0QxCtXc6RX1XAU6hMnQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [wasm32]
    requiresBuild: true
    dependencies:
      '@emnapi/runtime': 1.2.0
    dev: false
    optional: true

  /@img/sharp-win32-ia32@0.33.4:
    resolution: {integrity: sha512-99SJ91XzUhYHbx7uhK3+9Lf7+LjwMGQZMDlO/E/YVJ7Nc3lyDFZPGhjwiYdctoH2BOzW9+TnfqcaMKt0jHLdqw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@img/sharp-win32-x64@0.33.4:
    resolution: {integrity: sha512-3QLocdTRVIrFNye5YocZl+KKpYKP+fksi1QhmOArgx7GyhIbQp/WrJRu176jm8IxromS7RIkzMiMINVdBtC8Aw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0, npm: '>=9.6.5', pnpm: '>=7.1.0', yarn: '>=3.2.0'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@isaacs/cliui@8.0.2:
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}
    dependencies:
      string-width: 5.1.2
      string-width-cjs: /string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: /strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: /wrap-ansi@7.0.0
    dev: false

  /@jridgewell/gen-mapping@0.3.5:
    resolution: {integrity: sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==}
    engines: {node: '>=6.0.0'}
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.4.15
      '@jridgewell/trace-mapping': 0.3.25
    dev: false

  /@jridgewell/resolve-uri@3.1.2:
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}
    dev: false

  /@jridgewell/set-array@1.2.1:
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}
    dev: false

  /@jridgewell/sourcemap-codec@1.4.15:
    resolution: {integrity: sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==}
    dev: false

  /@jridgewell/trace-mapping@0.3.25:
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.4.15
    dev: false

  /@mapbox/node-pre-gyp@1.0.11:
    resolution: {integrity: sha512-Yhlar6v9WQgUp/He7BdgzOz8lqMQ8sU+jkCq7Wx8Myc5YFJLbEe7lgui/V7G1qB1DJykHSGwreceSaD60Y0PUQ==}
    hasBin: true
    dependencies:
      detect-libc: 2.0.3
      https-proxy-agent: 5.0.1
      make-dir: 3.1.0
      node-fetch: 2.7.0
      nopt: 5.0.0
      npmlog: 5.0.1
      rimraf: 3.0.2
      semver: 7.6.2
      tar: 6.2.1
    transitivePeerDependencies:
      - encoding
      - supports-color
    dev: false

  /@neondatabase/serverless@0.7.2:
    resolution: {integrity: sha512-wU3WA2uTyNO7wjPs3Mg0G01jztAxUxzd9/mskMmtPwPTjf7JKWi9AW5/puOGXLxmZ9PVgRFeBVRVYq5nBPhsCg==}
    dependencies:
      '@types/pg': 8.6.6
    dev: false

  /@next/env@15.0.0-canary.56:
    resolution: {integrity: sha512-NHKKx0jysNIcnx5c35TbK4nTUjp0HU4Ba7yaQBQDnU7/03TyhGR6WdL2SqsC6ex9mDleaozBPUcKPktOM3C4uA==}
    dev: false

  /@next/swc-darwin-arm64@15.0.0-canary.56:
    resolution: {integrity: sha512-Gfv1o2zwp3q/u7uqf7BYDMZJ0nAE677kIj/RauqWax3eQpIQgRQtsGz+HSL72Hn5s2CBqPoOcTxy/Tc0U6xaRw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-darwin-x64@15.0.0-canary.56:
    resolution: {integrity: sha512-Gpki7BNqNkeKCqtj+MYdV+6XVCBcNfhn/viOHvYkZK5KEJaoPyXb4xbMGhE7czcEtG2WBZ8oWAq1fZ59+TCvlA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-linux-arm64-gnu@15.0.0-canary.56:
    resolution: {integrity: sha512-n5ZCuYt7rVFcJr8hRQDhEowZGHxs7qecizzDUgsAu/Tlfw2tpgoTN52VEozVey8JmM36iHPpnOSgn13RJsbeaQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-linux-arm64-musl@15.0.0-canary.56:
    resolution: {integrity: sha512-Of58mUgV2W63CjP+v6xYDBlTZaCb1KD0hk+LqSQ0RIKQFQIqwza58GH5vhtv8oiYSYrt/YboLDNi6UGfWrTi3g==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-linux-x64-gnu@15.0.0-canary.56:
    resolution: {integrity: sha512-5sU9Hmeu5+1rHPDfZixx0QLjg1RIeDNEWhLZKC7i7Bt8vrwl/tPsdoHaBT1NdHujwvsn01/23uOZTsvYP/DBVw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-linux-x64-musl@15.0.0-canary.56:
    resolution: {integrity: sha512-z+mrYywY8uLzB4RhkUM4OKw6+3XnlGekuhnsIuP018Hxp0Y5j/Sfvqjbca9h8/Y0iG7pEm3T85hKu+F7Gt1OzA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-win32-arm64-msvc@15.0.0-canary.56:
    resolution: {integrity: sha512-D0+KDxxzuZXhwuE1Ta0h8pNPT8SIMPhcrvAkdTXfX2VqruDp4QnIgfZURhajxgeQHZmkTuMaEYS+ZdEr19KtiA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-win32-ia32-msvc@15.0.0-canary.56:
    resolution: {integrity: sha512-EG85/t7+SLXfRRYGT+BgRt9NBao0prq5ft7LXTj0L3p5oFHPm27zjIPDx5zopW1QLyv7StXqfUvddAaNCZzxAg==}
    engines: {node: '>= 10'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@next/swc-win32-x64-msvc@15.0.0-canary.56:
    resolution: {integrity: sha512-gmXZG/vFoZJ/0mWVPUVQNLs5yYGhkNSnGfo7pjI/C+B2ql/mrgP/+cXZh6EkgVG9AQX3I+LGdRM978RQKMRp0Q==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /@nodelib/fs.scandir@2.1.5:
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0
    dev: false

  /@nodelib/fs.stat@2.0.5:
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}
    dev: false

  /@nodelib/fs.walk@1.2.8:
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.17.1
    dev: false

  /@panva/hkdf@1.2.0:
    resolution: {integrity: sha512-97ZQvZJ4gJhi24Io6zI+W7B67I82q1I8i3BSzQ4OyZj1z4OW87/ruF26lrMES58inTKLy2KgVIDcx8PU4AaANQ==}
    dev: false

  /@pkgjs/parseargs@0.11.0:
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}
    requiresBuild: true
    dev: false
    optional: true

  /@swc/helpers@0.5.11:
    resolution: {integrity: sha512-YNlnKRWF2sVojTpIyzwou9XoTNbzbzONwRhOoniEioF1AtaitTvVZblaQRrAzChWQ1bLYyYSWzM18y4WwgzJ+A==}
    dependencies:
      tslib: 2.6.3
    dev: false

  /@tailwindcss/forms@0.5.7(tailwindcss@3.4.4):
    resolution: {integrity: sha512-QE7X69iQI+ZXwldE+rzasvbJiyV/ju1FGHH0Qn2W3FKbuYtqp8LKcy6iSw79fVUT5/Vvf+0XgLCeYVG+UV6hOw==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || >= 3.0.0-alpha.1'
    dependencies:
      mini-svg-data-uri: 1.4.4
      tailwindcss: 3.4.4
    dev: false

  /@types/bcrypt@5.0.2:
    resolution: {integrity: sha512-6atioO8Y75fNcbmj0G7UjI9lXN2pQ/IGJ2FWT4a/btd0Lk9lQalHLKhkgKVZ3r+spnmWUKfbMi1GEe9wyHQfNQ==}
    dependencies:
      '@types/node': 20.14.8
    dev: true

  /@types/cookie@0.6.0:
    resolution: {integrity: sha512-4Kh9a6B2bQciAhf7FSuMRRkUWecJgJu9nPnx3yzpsfXX/c50REIqpHY4C82bXP90qrLtXtkDxTZosYO3UpOwlA==}
    dev: false

  /@types/node@20.14.8:
    resolution: {integrity: sha512-DO+2/jZinXfROG7j7WKFn/3C6nFwxy2lLpgLjEXJz+0XKphZlTLJ14mo8Vfg8X5BWN6XjyESXq+LcYdT7tR3bA==}
    dependencies:
      undici-types: 5.26.5

  /@types/pg@8.6.6:
    resolution: {integrity: sha512-O2xNmXebtwVekJDD+02udOncjVcMZQuTEQEMpKJ0ZRf5E7/9JJX3izhKUcUifBkyKpljyUM6BTgy2trmviKlpw==}
    dependencies:
      '@types/node': 20.14.8
      pg-protocol: 1.6.1
      pg-types: 2.2.0
    dev: false

  /@types/prop-types@15.7.12:
    resolution: {integrity: sha512-5zvhXYtRNRluoE/jAp4GVsSduVUzNWKkOZrCDBWYtE7biZywwdC2AcEzg+cSMLFRfVgeAFqpfNabiPjxFddV1Q==}
    dev: true

  /@types/react-dom@18.3.0:
    resolution: {integrity: sha512-EhwApuTmMBmXuFOikhQLIBUn6uFg81SwLMOAUgodJF14SOBOCMdU04gDoYi0WOJJHD144TL32z4yDqCW3dnkQg==}
    dependencies:
      '@types/react': 18.3.3
    dev: true

  /@types/react@18.3.3:
    resolution: {integrity: sha512-hti/R0pS0q1/xx+TsI73XIqk26eBsISZ2R0wUijXIngRK9R/e7Xw/cXVxQK7R5JjW+SV4zGcn5hXjudkN/pLIw==}
    dependencies:
      '@types/prop-types': 15.7.12
      csstype: 3.1.3
    dev: true

  /@vercel/postgres@0.8.0:
    resolution: {integrity: sha512-/QUV9ExwaNdKooRjOQqvrKNVnRvsaXeukPNI5DB1ovUTesglfR/fparw7ngo1KUWWKIVpEj2TRrA+ObRHRdaLg==}
    engines: {node: '>=14.6'}
    dependencies:
      '@neondatabase/serverless': 0.7.2
      bufferutil: 4.0.8
      utf-8-validate: 6.0.3
      ws: 8.14.2(bufferutil@4.0.8)(utf-8-validate@6.0.3)
    dev: false

  /abbrev@1.1.1:
    resolution: {integrity: sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==}
    dev: false

  /agent-base@6.0.2:
    resolution: {integrity: sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==}
    engines: {node: '>= 6.0.0'}
    dependencies:
      debug: 4.3.5
    transitivePeerDependencies:
      - supports-color
    dev: false

  /ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}
    dev: false

  /ansi-regex@6.0.1:
    resolution: {integrity: sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==}
    engines: {node: '>=12'}
    dev: false

  /ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}
    dependencies:
      color-convert: 2.0.1
    dev: false

  /ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}
    dev: false

  /any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}
    dev: false

  /anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1
    dev: false

  /aproba@2.0.0:
    resolution: {integrity: sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==}
    dev: false

  /are-we-there-yet@2.0.0:
    resolution: {integrity: sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==}
    engines: {node: '>=10'}
    deprecated: This package is no longer supported.
    dependencies:
      delegates: 1.0.0
      readable-stream: 3.6.2
    dev: false

  /arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}
    dev: false

  /autoprefixer@10.4.19(postcss@8.4.38):
    resolution: {integrity: sha512-BaENR2+zBZ8xXhM4pUaKUxlVdxZ0EZhjvbopwnXmxRUfqDmwSpC2lAi/QXvx7NRdPCo1WKEcEF6mV64si1z4Ew==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      browserslist: 4.23.0
      caniuse-lite: 1.0.30001632
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.0.1
      postcss: 8.4.38
      postcss-value-parser: 4.2.0
    dev: false

  /balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}
    dev: false

  /bcrypt@5.1.1:
    resolution: {integrity: sha512-AGBHOG5hPYZ5Xl9KXzU5iKq9516yEmvCKDg3ecP5kX2aB6UqTeXZxk2ELnDgDm6BQSMlLt9rDB4LoSMx0rYwww==}
    engines: {node: '>= 10.0.0'}
    requiresBuild: true
    dependencies:
      '@mapbox/node-pre-gyp': 1.0.11
      node-addon-api: 5.1.0
    transitivePeerDependencies:
      - encoding
      - supports-color
    dev: false

  /binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}
    dev: false

  /brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1
    dev: false

  /brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}
    dependencies:
      balanced-match: 1.0.2
    dev: false

  /braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}
    dependencies:
      fill-range: 7.1.1
    dev: false

  /browserslist@4.23.0:
    resolution: {integrity: sha512-QW8HiM1shhT2GuzkvklfjcKDiWFXHOeFCIA/huJPwHsslwcydgk7X+z2zXpEijP98UCY7HbubZt5J2Zgvf0CaQ==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true
    dependencies:
      caniuse-lite: 1.0.30001632
      electron-to-chromium: 1.4.789
      node-releases: 2.0.14
      update-browserslist-db: 1.0.16(browserslist@4.23.0)
    dev: false

  /bufferutil@4.0.8:
    resolution: {integrity: sha512-4T53u4PdgsXqKaIctwF8ifXlRTTmEPJ8iEPWFdGZvcf7sbwYo6FKFEX9eNNAnzFZ7EzJAQ3CJeOtCRA4rDp7Pw==}
    engines: {node: '>=6.14.2'}
    requiresBuild: true
    dependencies:
      node-gyp-build: 4.8.1
    dev: false

  /busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}
    dependencies:
      streamsearch: 1.1.0
    dev: false

  /camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}
    dev: false

  /caniuse-lite@1.0.30001632:
    resolution: {integrity: sha512-udx3o7yHJfUxMLkGohMlVHCvFvWmirKh9JAH/d7WOLPetlH+LTL5cocMZ0t7oZx/mdlOWXti97xLZWc8uURRHg==}
    dev: false

  /chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3
    dev: false

  /chownr@2.0.0:
    resolution: {integrity: sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==}
    engines: {node: '>=10'}
    dev: false

  /client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}
    dev: false

  /clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}
    dev: false

  /color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}
    dependencies:
      color-name: 1.1.4
    dev: false

  /color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}
    requiresBuild: true
    dev: false

  /color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}
    requiresBuild: true
    dependencies:
      color-name: 1.1.4
      simple-swizzle: 0.2.2
    dev: false
    optional: true

  /color-support@1.1.3:
    resolution: {integrity: sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==}
    hasBin: true
    dev: false

  /color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}
    requiresBuild: true
    dependencies:
      color-convert: 2.0.1
      color-string: 1.9.1
    dev: false
    optional: true

  /commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}
    dev: false

  /concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}
    dev: false

  /console-control-strings@1.1.0:
    resolution: {integrity: sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==}
    dev: false

  /cookie@0.6.0:
    resolution: {integrity: sha512-U71cyTamuh1CRNCfpGY6to28lxvNwPG4Guz/EVjgf3Jmzv0vlDp1atT9eS5dDjMYHucpHbWns6Lwf3BKz6svdw==}
    engines: {node: '>= 0.6'}
    dev: false

  /cross-spawn@7.0.3:
    resolution: {integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==}
    engines: {node: '>= 8'}
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2
    dev: false

  /cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true
    dev: false

  /csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}
    dev: true

  /debug@4.3.5:
    resolution: {integrity: sha512-pt0bNEmneDIvdL1Xsd9oDQ/wrQRkXDT4AUWlNZNPKvW5x/jyO9VFXkJUP07vQ2upmw5PlaITaPKc31jK13V+jg==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true
    dependencies:
      ms: 2.1.2
    dev: false

  /delegates@1.0.0:
    resolution: {integrity: sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==}
    dev: false

  /detect-libc@2.0.3:
    resolution: {integrity: sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==}
    engines: {node: '>=8'}
    dev: false

  /didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}
    dev: false

  /dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}
    dev: false

  /eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}
    dev: false

  /electron-to-chromium@1.4.789:
    resolution: {integrity: sha512-0VbyiaXoT++Fi2vHGo2ThOeS6X3vgRCWrjPeO2FeIAWL6ItiSJ9BqlH8LfCXe3X1IdcG+S0iLoNaxQWhfZoGzQ==}
    dev: false

  /emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}
    dev: false

  /emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}
    dev: false

  /escalade@3.1.2:
    resolution: {integrity: sha512-ErCHMCae19vR8vQGe50xIsVomy19rg6gFu3+r3jkEO46suLMWBksvVyoGgQV+jOfl84ZSOSlmv6Gxa89PmTGmA==}
    engines: {node: '>=6'}
    dev: false

  /fast-glob@3.3.2:
    resolution: {integrity: sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==}
    engines: {node: '>=8.6.0'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.7
    dev: false

  /fastq@1.17.1:
    resolution: {integrity: sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==}
    dependencies:
      reusify: 1.0.4
    dev: false

  /fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}
    dependencies:
      to-regex-range: 5.0.1
    dev: false

  /foreground-child@3.1.1:
    resolution: {integrity: sha512-TMKDUnIte6bfb5nWv7V/caI169OHgvwjb7V4WkeUvbQQdjr5rWKqHFiKWb/fcOwB+CzBT+qbWjvj+DVwRskpIg==}
    engines: {node: '>=14'}
    dependencies:
      cross-spawn: 7.0.3
      signal-exit: 4.1.0
    dev: false

  /fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}
    dev: false

  /fs-minipass@2.1.0:
    resolution: {integrity: sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==}
    engines: {node: '>= 8'}
    dependencies:
      minipass: 3.3.6
    dev: false

  /fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}
    dev: false

  /fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}
    dev: false

  /gauge@3.0.2:
    resolution: {integrity: sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==}
    engines: {node: '>=10'}
    deprecated: This package is no longer supported.
    dependencies:
      aproba: 2.0.0
      color-support: 1.1.3
      console-control-strings: 1.1.0
      has-unicode: 2.0.1
      object-assign: 4.1.1
      signal-exit: 3.0.7
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wide-align: 1.1.5
    dev: false

  /glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}
    dependencies:
      is-glob: 4.0.3
    dev: false

  /glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}
    dependencies:
      is-glob: 4.0.3
    dev: false

  /glob@10.4.1:
    resolution: {integrity: sha512-2jelhlq3E4ho74ZyVLN03oKdAZVUa6UDZzFLVH1H7dnoax+y9qyaq8zBkfDIggjniU19z0wU18y16jMB2eyVIw==}
    engines: {node: '>=16 || 14 >=14.18'}
    hasBin: true
    dependencies:
      foreground-child: 3.1.1
      jackspeak: 3.2.3
      minimatch: 9.0.4
      minipass: 7.1.2
      path-scurry: 1.11.1
    dev: false

  /glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1
    dev: false

  /graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}
    dev: false

  /has-unicode@2.0.1:
    resolution: {integrity: sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==}
    dev: false

  /hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      function-bind: 1.1.2
    dev: false

  /https-proxy-agent@5.0.1:
    resolution: {integrity: sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==}
    engines: {node: '>= 6'}
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.5
    transitivePeerDependencies:
      - supports-color
    dev: false

  /inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2
    dev: false

  /inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}
    dev: false

  /is-arrayish@0.3.2:
    resolution: {integrity: sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==}
    requiresBuild: true
    dev: false
    optional: true

  /is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}
    dependencies:
      binary-extensions: 2.3.0
    dev: false

  /is-core-module@2.13.1:
    resolution: {integrity: sha512-hHrIjvZsftOsvKSn2TRYl63zvxsgE0K+0mYMoH6gD4omR5IWB2KynivBQczo3+wF1cCkjzvptnI9Q0sPU66ilw==}
    dependencies:
      hasown: 2.0.2
    dev: false

  /is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}
    dev: false

  /is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}
    dev: false

  /is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extglob: 2.1.1
    dev: false

  /is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}
    dev: false

  /isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}
    dev: false

  /jackspeak@3.2.3:
    resolution: {integrity: sha512-htOzIMPbpLid/Gq9/zaz9SfExABxqRe1sSCdxntlO/aMD6u0issZQiY25n2GKQUtJ02j7z5sfptlAOMpWWOmvw==}
    engines: {node: '>=14'}
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0
    dev: false

  /jiti@1.21.0:
    resolution: {integrity: sha512-gFqAIbuKyyso/3G2qhiO2OM6shY6EPP/R0+mkDbyspxKazh8BXDC5FiFsUjlczgdNz/vfra0da2y+aHrusLG/Q==}
    hasBin: true
    dev: false

  /jose@5.4.1:
    resolution: {integrity: sha512-U6QajmpV/nhL9SyfAewo000fkiRQ+Yd2H0lBxJJ9apjpOgkOcBQJWOrMo917lxLptdS/n/o/xPzMkXhF46K8hQ==}
    dev: false

  /lilconfig@2.1.0:
    resolution: {integrity: sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==}
    engines: {node: '>=10'}
    dev: false

  /lilconfig@3.1.1:
    resolution: {integrity: sha512-O18pf7nyvHTckunPWCV1XUNXU1piu01y2b7ATJ0ppkUkk8ocqVWBrYjJBCwHDjD/ZWcfyrA0P4gKhzWGi5EINQ==}
    engines: {node: '>=14'}
    dev: false

  /lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}
    dev: false

  /lru-cache@10.2.2:
    resolution: {integrity: sha512-9hp3Vp2/hFQUiIwKo8XCeFVnrg8Pk3TYNPIR7tJADKi5YfcF7vEaK7avFHTlSy3kOKYaJQaalfEo6YuXdceBOQ==}
    engines: {node: 14 || >=16.14}
    dev: false

  /make-dir@3.1.0:
    resolution: {integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==}
    engines: {node: '>=8'}
    dependencies:
      semver: 6.3.1
    dev: false

  /merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}
    dev: false

  /micromatch@4.0.7:
    resolution: {integrity: sha512-LPP/3KorzCwBxfeUuZmaR6bG2kdeHSbe0P2tY3FLRU4vYrjYz5hI4QZwV0njUx3jeuKe67YukQ1LSPZBKDqO/Q==}
    engines: {node: '>=8.6'}
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1
    dev: false

  /mini-svg-data-uri@1.4.4:
    resolution: {integrity: sha512-r9deDe9p5FJUPZAk3A59wGH7Ii9YrjjWw0jmw/liSbHl2CHiyXj6FcDXDu2K3TjVAXqiJdaw3xxwlZZr9E6nHg==}
    hasBin: true
    dev: false

  /minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}
    dependencies:
      brace-expansion: 1.1.11
    dev: false

  /minimatch@9.0.4:
    resolution: {integrity: sha512-KqWh+VchfxcMNRAJjj2tnsSJdNbHsVgnkBhTNrW7AjVo6OvLtxw8zfT9oLw1JSohlFzJ8jCoTgaoXvJ+kHt6fw==}
    engines: {node: '>=16 || 14 >=14.17'}
    dependencies:
      brace-expansion: 2.0.1
    dev: false

  /minipass@3.3.6:
    resolution: {integrity: sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==}
    engines: {node: '>=8'}
    dependencies:
      yallist: 4.0.0
    dev: false

  /minipass@5.0.0:
    resolution: {integrity: sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==}
    engines: {node: '>=8'}
    dev: false

  /minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}
    dev: false

  /minizlib@2.1.2:
    resolution: {integrity: sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==}
    engines: {node: '>= 8'}
    dependencies:
      minipass: 3.3.6
      yallist: 4.0.0
    dev: false

  /mkdirp@1.0.4:
    resolution: {integrity: sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==}
    engines: {node: '>=10'}
    hasBin: true
    dev: false

  /ms@2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}
    dev: false

  /mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0
    dev: false

  /nanoid@3.3.7:
    resolution: {integrity: sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true
    dev: false

  /next-auth@5.0.0-beta.19(next@15.0.0-canary.56)(react@19.0.0-rc-f38c22b244-20240704):
    resolution: {integrity: sha512-YHu1igcAxZPh8ZB7GIM93dqgY6gcAzq66FOhQFheAdOx1raxNcApt05nNyNCSB6NegSiyJ4XOPsaNow4pfDmsg==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      next: ^14 || ^15.0.0-0
      nodemailer: ^6.6.5
      react: ^18.2.0 || ^19.0.0-0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true
    dependencies:
      '@auth/core': 0.32.0
      next: 15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704)(react@19.0.0-rc-f38c22b244-20240704)
      react: 19.0.0-rc-f38c22b244-20240704
    dev: false

  /next@15.0.0-canary.56(react-dom@19.0.0-rc-f38c22b244-20240704)(react@19.0.0-rc-f38c22b244-20240704):
    resolution: {integrity: sha512-Qf951CQb2dICry5QzkhpoFX6VG0er2WSdMODeeylyGpP0JPT15C4HWjoJ6Jeoqw+J8i+QvDpLR501o+oY5Qaow==}
    engines: {node: '>=18.18.0'}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.41.2
      babel-plugin-react-compiler: '*'
      react: 19.0.0-rc.0
      react-dom: 19.0.0-rc.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true
    dependencies:
      '@next/env': 15.0.0-canary.56
      '@swc/helpers': 0.5.11
      busboy: 1.6.0
      caniuse-lite: 1.0.30001632
      graceful-fs: 4.2.11
      postcss: 8.4.31
      react: 19.0.0-rc-f38c22b244-20240704
      react-dom: 19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704)
      styled-jsx: 5.1.6(react@19.0.0-rc-f38c22b244-20240704)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.0.0-canary.56
      '@next/swc-darwin-x64': 15.0.0-canary.56
      '@next/swc-linux-arm64-gnu': 15.0.0-canary.56
      '@next/swc-linux-arm64-musl': 15.0.0-canary.56
      '@next/swc-linux-x64-gnu': 15.0.0-canary.56
      '@next/swc-linux-x64-musl': 15.0.0-canary.56
      '@next/swc-win32-arm64-msvc': 15.0.0-canary.56
      '@next/swc-win32-ia32-msvc': 15.0.0-canary.56
      '@next/swc-win32-x64-msvc': 15.0.0-canary.56
      sharp: 0.33.4
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros
    dev: false

  /node-addon-api@5.1.0:
    resolution: {integrity: sha512-eh0GgfEkpnoWDq+VY8OyvYhFEzBk6jIYbRKdIlyTiAXIVJ8PyBaKb0rp7oDtoddbdoHWhq8wwr+XZ81F1rpNdA==}
    dev: false

  /node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true
    dependencies:
      whatwg-url: 5.0.0
    dev: false

  /node-gyp-build@4.8.1:
    resolution: {integrity: sha512-OSs33Z9yWr148JZcbZd5WiAXhh/n9z8TxQcdMhIOlpN9AhWpLfvVFO73+m77bBABQMaY9XSvIa+qk0jlI7Gcaw==}
    hasBin: true
    dev: false

  /node-releases@2.0.14:
    resolution: {integrity: sha512-y10wOWt8yZpqXmOgRo77WaHEmhYQYGNA6y421PKsKYWEK8aW+cqAphborZDhqfyKrbZEN92CN1X2KbafY2s7Yw==}
    dev: false

  /nopt@5.0.0:
    resolution: {integrity: sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==}
    engines: {node: '>=6'}
    hasBin: true
    dependencies:
      abbrev: 1.1.1
    dev: false

  /normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}
    dev: false

  /normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}
    dev: false

  /npmlog@5.0.1:
    resolution: {integrity: sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==}
    deprecated: This package is no longer supported.
    dependencies:
      are-we-there-yet: 2.0.0
      console-control-strings: 1.1.0
      gauge: 3.0.2
      set-blocking: 2.0.0
    dev: false

  /oauth4webapi@2.11.1:
    resolution: {integrity: sha512-aNzOnL98bL6izG97zgnZs1PFEyO4WDVRhz2Pd066NPak44w5ESLRCYmJIyey8avSBPOMtBjhF3ZDDm7bIb7UOg==}
    dev: false

  /object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}
    dev: false

  /object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}
    dev: false

  /once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}
    dependencies:
      wrappy: 1.0.2
    dev: false

  /path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}
    dev: false

  /path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}
    dev: false

  /path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}
    dev: false

  /path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}
    dependencies:
      lru-cache: 10.2.2
      minipass: 7.1.2
    dev: false

  /pg-int8@1.0.1:
    resolution: {integrity: sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==}
    engines: {node: '>=4.0.0'}
    dev: false

  /pg-protocol@1.6.1:
    resolution: {integrity: sha512-jPIlvgoD63hrEuihvIg+tJhoGjUsLPn6poJY9N5CnlPd91c2T18T/9zBtLxZSb1EhYxBRoZJtzScCaWlYLtktg==}
    dev: false

  /pg-types@2.2.0:
    resolution: {integrity: sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==}
    engines: {node: '>=4'}
    dependencies:
      pg-int8: 1.0.1
      postgres-array: 2.0.0
      postgres-bytea: 1.0.0
      postgres-date: 1.0.7
      postgres-interval: 1.2.0
    dev: false

  /picocolors@1.0.1:
    resolution: {integrity: sha512-anP1Z8qwhkbmu7MFP5iTt+wQKXgwzf7zTyGlcdzabySa9vd0Xt392U0rVmz9poOaBj0uHJKyyo9/upk0HrEQew==}
    dev: false

  /picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}
    dev: false

  /pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}
    dev: false

  /pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}
    dev: false

  /postcss-import@15.1.0(postcss@8.4.38):
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0
    dependencies:
      postcss: 8.4.38
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.8
    dev: false

  /postcss-js@4.0.1(postcss@8.4.38):
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.4.38
    dev: false

  /postcss-load-config@4.0.2(postcss@8.4.38):
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true
    dependencies:
      lilconfig: 3.1.1
      postcss: 8.4.38
      yaml: 2.4.3
    dev: false

  /postcss-nested@6.0.1(postcss@8.4.38):
    resolution: {integrity: sha512-mEp4xPMi5bSWiMbsgoPfcP74lsWLHkQbZc3sY+jWYd65CUwXrUaTp0fmNpa01ZcETKlIgUdFN/MpS2xZtqL9dQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14
    dependencies:
      postcss: 8.4.38
      postcss-selector-parser: 6.1.0
    dev: false

  /postcss-selector-parser@6.1.0:
    resolution: {integrity: sha512-UMz42UD0UY0EApS0ZL9o1XnLhSTtvvvLe5Dc2H2O56fvRZi+KulDyf5ctDhhtYJBGKStV2FL1fy6253cmLgqVQ==}
    engines: {node: '>=4'}
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2
    dev: false

  /postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}
    dev: false

  /postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.1
      source-map-js: 1.2.0
    dev: false

  /postcss@8.4.38:
    resolution: {integrity: sha512-Wglpdk03BSfXkHoQa3b/oulrotAkwrlLDRSOb9D0bN86FdRyE9lppSp33aHNPgBa0JKCoB+drFLZkQoRRYae5A==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.1
      source-map-js: 1.2.0
    dev: false

  /postgres-array@2.0.0:
    resolution: {integrity: sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==}
    engines: {node: '>=4'}
    dev: false

  /postgres-bytea@1.0.0:
    resolution: {integrity: sha512-xy3pmLuQqRBZBXDULy7KbaitYqLcmxigw14Q5sj8QBVLqEwXfeybIKVWiqAXTlcvdvb0+xkOtDbfQMOf4lST1w==}
    engines: {node: '>=0.10.0'}
    dev: false

  /postgres-date@1.0.7:
    resolution: {integrity: sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==}
    engines: {node: '>=0.10.0'}
    dev: false

  /postgres-interval@1.2.0:
    resolution: {integrity: sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==}
    engines: {node: '>=0.10.0'}
    dependencies:
      xtend: 4.0.2
    dev: false

  /preact-render-to-string@5.2.3(preact@10.11.3):
    resolution: {integrity: sha512-aPDxUn5o3GhWdtJtW0svRC2SS/l8D9MAgo2+AWml+BhDImb27ALf04Q2d+AHqUUOc6RdSXFIBVa2gxzgMKgtZA==}
    peerDependencies:
      preact: '>=10'
    dependencies:
      preact: 10.11.3
      pretty-format: 3.8.0
    dev: false

  /preact@10.11.3:
    resolution: {integrity: sha512-eY93IVpod/zG3uMF22Unl8h9KkrcKIRs2EGar8hwLZZDU1lkjph303V9HZBwufh2s736U6VXuhD109LYqPoffg==}
    dev: false

  /pretty-format@3.8.0:
    resolution: {integrity: sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==}
    dev: false

  /queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}
    dev: false

  /react-dom@19.0.0-rc-f38c22b244-20240704(react@19.0.0-rc-f38c22b244-20240704):
    resolution: {integrity: sha512-g89q2pf3irdpKFUMgCQgtxgqo3TSV1k1J6Sc8God4FwfxuNmAOOthkijENe5XZe6VeV1tor9DPzpjdTD9EyvNw==}
    peerDependencies:
      react: 19.0.0-rc-f38c22b244-20240704
    dependencies:
      react: 19.0.0-rc-f38c22b244-20240704
      scheduler: 0.25.0-rc-f38c22b244-20240704
    dev: false

  /react@19.0.0-rc-f38c22b244-20240704:
    resolution: {integrity: sha512-OP8O6Oc1rdR9IdIKJRKaL1PYd4eGkn6f88VqiygWyyG4P4RmPPix5pp7MatqSt9TnBOcVT+lBMGoVxRgUFeudQ==}
    engines: {node: '>=0.10.0'}
    dev: false

  /read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}
    dependencies:
      pify: 2.3.0
    dev: false

  /readable-stream@3.6.2:
    resolution: {integrity: sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==}
    engines: {node: '>= 6'}
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2
    dev: false

  /readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}
    dependencies:
      picomatch: 2.3.1
    dev: false

  /resolve@1.22.8:
    resolution: {integrity: sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==}
    hasBin: true
    dependencies:
      is-core-module: 2.13.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0
    dev: false

  /reusify@1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}
    dev: false

  /rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true
    dependencies:
      glob: 7.2.3
    dev: false

  /run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}
    dependencies:
      queue-microtask: 1.2.3
    dev: false

  /safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}
    dev: false

  /scheduler@0.25.0-rc-f38c22b244-20240704:
    resolution: {integrity: sha512-uAELK9fHhvg7kDQhk29+uO8FUMWUpkg9WpzkNXFP+BJy5HEtqnajde3CxuSgh202WH9TqoaiWT1mdA3DvUu6cQ==}
    dev: false

  /semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true
    dev: false

  /semver@7.6.2:
    resolution: {integrity: sha512-FNAIBWCx9qcRhoHcgcJ0gvU7SN1lYU2ZXuSfl04bSC5OpvDHFyJCjdNHomPXxjQlCBU67YW64PzY7/VIEH7F2w==}
    engines: {node: '>=10'}
    hasBin: true
    dev: false

  /set-blocking@2.0.0:
    resolution: {integrity: sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==}
    dev: false

  /sharp@0.33.4:
    resolution: {integrity: sha512-7i/dt5kGl7qR4gwPRD2biwD2/SvBn3O04J77XKFgL2OnZtQw+AG9wnuS/csmu80nPRHLYE9E41fyEiG8nhH6/Q==}
    engines: {libvips: '>=8.15.2', node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    requiresBuild: true
    dependencies:
      color: 4.2.3
      detect-libc: 2.0.3
      semver: 7.6.2
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.33.4
      '@img/sharp-darwin-x64': 0.33.4
      '@img/sharp-libvips-darwin-arm64': 1.0.2
      '@img/sharp-libvips-darwin-x64': 1.0.2
      '@img/sharp-libvips-linux-arm': 1.0.2
      '@img/sharp-libvips-linux-arm64': 1.0.2
      '@img/sharp-libvips-linux-s390x': 1.0.2
      '@img/sharp-libvips-linux-x64': 1.0.2
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.2
      '@img/sharp-libvips-linuxmusl-x64': 1.0.2
      '@img/sharp-linux-arm': 0.33.4
      '@img/sharp-linux-arm64': 0.33.4
      '@img/sharp-linux-s390x': 0.33.4
      '@img/sharp-linux-x64': 0.33.4
      '@img/sharp-linuxmusl-arm64': 0.33.4
      '@img/sharp-linuxmusl-x64': 0.33.4
      '@img/sharp-wasm32': 0.33.4
      '@img/sharp-win32-ia32': 0.33.4
      '@img/sharp-win32-x64': 0.33.4
    dev: false
    optional: true

  /shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}
    dependencies:
      shebang-regex: 3.0.0
    dev: false

  /shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}
    dev: false

  /signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}
    dev: false

  /signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}
    dev: false

  /simple-swizzle@0.2.2:
    resolution: {integrity: sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==}
    requiresBuild: true
    dependencies:
      is-arrayish: 0.3.2
    dev: false
    optional: true

  /source-map-js@1.2.0:
    resolution: {integrity: sha512-itJW8lvSA0TXEphiRoawsCksnlf8SyvmFzIhltqAHluXd88pkCd+cXJVHTDwdCr0IzwptSm035IHQktUu1QUMg==}
    engines: {node: '>=0.10.0'}
    dev: false

  /streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}
    dev: false

  /string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1
    dev: false

  /string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0
    dev: false

  /string_decoder@1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}
    dependencies:
      safe-buffer: 5.2.1
    dev: false

  /strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}
    dependencies:
      ansi-regex: 5.0.1
    dev: false

  /strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}
    dependencies:
      ansi-regex: 6.0.1
    dev: false

  /styled-jsx@5.1.6(react@19.0.0-rc-f38c22b244-20240704):
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true
    dependencies:
      client-only: 0.0.1
      react: 19.0.0-rc-f38c22b244-20240704
    dev: false

  /sucrase@3.35.0:
    resolution: {integrity: sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true
    dependencies:
      '@jridgewell/gen-mapping': 0.3.5
      commander: 4.1.1
      glob: 10.4.1
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.6
      ts-interface-checker: 0.1.13
    dev: false

  /supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}
    dev: false

  /tailwindcss@3.4.4:
    resolution: {integrity: sha512-ZoyXOdJjISB7/BcLTR6SEsLgKtDStYyYZVLsUtWChO4Ps20CBad7lfJKVDiejocV4ME1hLmyY0WJE3hSDcmQ2A==}
    engines: {node: '>=14.0.0'}
    hasBin: true
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.2
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.0
      lilconfig: 2.1.0
      micromatch: 4.0.7
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.0.1
      postcss: 8.4.38
      postcss-import: 15.1.0(postcss@8.4.38)
      postcss-js: 4.0.1(postcss@8.4.38)
      postcss-load-config: 4.0.2(postcss@8.4.38)
      postcss-nested: 6.0.1(postcss@8.4.38)
      postcss-selector-parser: 6.1.0
      resolve: 1.22.8
      sucrase: 3.35.0
    transitivePeerDependencies:
      - ts-node
    dev: false

  /tar@6.2.1:
    resolution: {integrity: sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==}
    engines: {node: '>=10'}
    dependencies:
      chownr: 2.0.0
      fs-minipass: 2.1.0
      minipass: 5.0.0
      minizlib: 2.1.2
      mkdirp: 1.0.4
      yallist: 4.0.0
    dev: false

  /thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}
    dependencies:
      thenify: 3.3.1
    dev: false

  /thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}
    dependencies:
      any-promise: 1.3.0
    dev: false

  /to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}
    dependencies:
      is-number: 7.0.0
    dev: false

  /tr46@0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}
    dev: false

  /ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}
    dev: false

  /tslib@2.6.3:
    resolution: {integrity: sha512-xNvxJEOUiWPGhUuUdQgAJPKOOJfGnIyKySOc09XkKsgdUV/3E2zvwZYdejjmRgPCgcym1juLH3226yA7sEFJKQ==}
    dev: false

  /typescript@5.5.2:
    resolution: {integrity: sha512-NcRtPEOsPFFWjobJEtfihkLCZCXZt/os3zf8nTxjVH3RvTSxjrCamJpbExGvYOF+tFHc3pA65qpdwPbzjohhew==}
    engines: {node: '>=14.17'}
    hasBin: true
    dev: false

  /undici-types@5.26.5:
    resolution: {integrity: sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==}

  /update-browserslist-db@1.0.16(browserslist@4.23.0):
    resolution: {integrity: sha512-KVbTxlBYlckhF5wgfyZXTWnMn7MMZjMu9XG8bPlliUOP9ThaF4QnhP8qrjrH7DRzHfSk0oQv1wToW+iA5GajEQ==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'
    dependencies:
      browserslist: 4.23.0
      escalade: 3.1.2
      picocolors: 1.0.1
    dev: false

  /use-debounce@10.0.1(react@19.0.0-rc-f38c22b244-20240704):
    resolution: {integrity: sha512-0uUXjOfm44e6z4LZ/woZvkM8FwV1wiuoB6xnrrOmeAEjRDDzTLQNRFtYHvqUsJdrz1X37j0rVGIVp144GLHGKg==}
    engines: {node: '>= 16.0.0'}
    peerDependencies:
      react: '>=16.8.0'
    dependencies:
      react: 19.0.0-rc-f38c22b244-20240704
    dev: false

  /utf-8-validate@6.0.3:
    resolution: {integrity: sha512-uIuGf9TWQ/y+0Lp+KGZCMuJWc3N9BHA+l/UmHd/oUHwJJDeysyTRxNQVkbzsIWfGFbRe3OcgML/i0mvVRPOyDA==}
    engines: {node: '>=6.14.2'}
    requiresBuild: true
    dependencies:
      node-gyp-build: 4.8.1
    dev: false

  /util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}
    dev: false

  /webidl-conversions@3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}
    dev: false

  /whatwg-url@5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1
    dev: false

  /which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true
    dependencies:
      isexe: 2.0.0
    dev: false

  /wide-align@1.1.5:
    resolution: {integrity: sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==}
    dependencies:
      string-width: 4.2.3
    dev: false

  /wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1
    dev: false

  /wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0
    dev: false

  /wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}
    dev: false

  /ws@8.14.2(bufferutil@4.0.8)(utf-8-validate@6.0.3):
    resolution: {integrity: sha512-wEBG1ftX4jcglPxgFCMJmZ2PLtSbJ2Peg6TmpJFTbe9GZYOQCDPdMYu/Tm0/bGZkw8paZnJY45J4K2PZrLYq8g==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: '>=5.0.2'
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true
    dependencies:
      bufferutil: 4.0.8
      utf-8-validate: 6.0.3
    dev: false

  /xtend@4.0.2:
    resolution: {integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==}
    engines: {node: '>=0.4'}
    dev: false

  /yallist@4.0.0:
    resolution: {integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==}
    dev: false

  /yaml@2.4.3:
    resolution: {integrity: sha512-sntgmxj8o7DE7g/Qi60cqpLBA3HG3STcDA0kO+WfB05jEKhZMbY7umNm2rBpQvsmZ16/lPXCJGW2672dgOUkrg==}
    engines: {node: '>= 14'}
    hasBin: true
    dev: false

  /zod@3.23.8:
    resolution: {integrity: sha512-XBx9AXhXktjUqnepgTiE5flcKIYWi/rme0Eaj+5Y0lftuGBq+jyRu/md4WnuxqgP1ubdpNCsYEYPxrzVHD8d6g==}
    dev: false