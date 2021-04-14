import { externalSchematic, chain, Rule } from '@angular-devkit/schematics'
import * as path from 'path'

/** @todo move to util lib once it is created */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      name: schema.name,
      project: 'ui-components',
    }),
    externalSchematic('@ngneat/spectator', 'spectator-component', {
      changeDetection: 'OnPush',
      export: true,
      inlineStyle: true,
      inlineTemplate: true,
      module: schema.name,
      name: schema.name,
      path: path.join('libs', 'ui', 'components', 'src', 'lib'),
      prefix: 'ui',
      project: 'ui-components',
      style: 'scss',
      template: `foo`,
    }),
    externalSchematic('@nrwl/angular', 'component-story', {
      componentFileName: `${schema.name}.component`,
      componentName: `${capitalizeFirstLetter(schema.name)}`,
      componentPath: path.join('lib', schema.name),
      libPath: path.join('libs', 'ui', 'components', 'src'),
      project: 'ui-components',
    }),
  ])
}
