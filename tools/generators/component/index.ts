import { externalSchematic, chain, Rule } from '@angular-devkit/schematics'
import { join } from 'path'

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
      path: join('libs', 'ui', 'components', 'src', 'lib'),
      prefix: 'ui',
      project: 'ui-components',
      style: 'scss',
    }),
    externalSchematic('@nrwl/angular', 'component-story', {
      componentFileName: `${schema.name}.component`,
      componentName: `${capitalizeFirstLetter(schema.name)}`,
      componentPath: join('lib', schema.name),
      libPath: join('libs', 'ui', 'components', 'src'),
      project: 'ui-components',
    }),
  ])
}
