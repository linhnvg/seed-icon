import { generate } from "@icona/generator";
import seedIconsPkg from "./package.json" with { type: "json" };

generate({
  config: {
    svg: {
      active: true,
      genMode: "recreate",
      path: "svg",
      svgoConfig: {
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: [
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [
                { "data-seed-icon": "true" },
                { "data-seed-icon-version": seedIconsPkg.version },
              ],
            },
          },
          {
            name: "convertColors",
            params: {
              currentColor: true,
            },
          },
          {
            name: "removeAttrs",
            params: {
              attrs: ["id"],
            },
            fn: () => {
              return {
                element: {
                  enter: node => {
                    // NOTE: Not working
                    // if (node.name === 'mask') return;

                    // NOTE: Working
                    if (node.name !== 'mask') delete node.attributes.id;
                  }
                }
              }
            }
          },
        ],
      },
    },
    react: {
      active: true,
      genMode: "recreate",
      path: "react",
      svgrConfig: {
        template: (variables, { tpl }) => {
          return tpl`
            ${variables.imports};

            const ${variables.componentName} = (
              { size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string },
              ref: Ref<SVGSVGElement>
            ) => (
              ${variables.jsx}
            );

            ${variables.exports}
          `;
        },
        jsxRuntime: "classic",
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        prettierConfig: {
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          semi: true,
        },
        svgoConfig: {
          plugins: [
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [
                  { "data-seed-icon": "true" },
                  { "data-seed-icon-version": seedIconsPkg.version },
                ],
              },
            },
            {
              name: "convertColors",
              params: {
                currentColor: true,
              },
            },
            {
              name: "removeAttrs",
              params: {
                attrs: ["id"],
              },
              fn: () => {
                return {
                  element: {
                    enter: node => {
                      // NOTE: Not working
                      // if (node.name === 'mask') return;

                      // NOTE: Working
                      if (node.name !== 'mask') delete node.attributes.id;
                    }
                  }
                }
              }
            },
          ],
        },
        typescript: true,
        dimensions: false,
        ref: true,
        svgProps: {
          width: "{size}",
          height: "{size}",
        },
      },
    },
  },
});
