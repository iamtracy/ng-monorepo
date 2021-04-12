import { externalSchematic, chain, Rule } from '@angular-devkit/schematics'
import * as path from 'path'

/** @todo move to util lib once it is created */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      project: 'components',
      name: schema.name,
    }),
    externalSchematic('@ngneat/spectator', 'spectator-component', {
      project: 'components',
      name: schema.name,
      module: schema.name,
      export: true,
      prefix: 'component',
      style: 'scss',
      inlineStyle: true,
      lintFix: true,
      changeDetection: 'OnPush',
      template: `foo`,
      path: path.join('libs', 'ui', 'components', 'src', 'lib'),
    }),
    externalSchematic('@nrwl/angular', 'component-story', {
      project: 'components',
      componentName: `${capitalizeFirstLetter(schema.name)}Component`,
      libPath: path.join('libs', 'ui', 'components', 'src'),
      componentPath: path.join('lib', schema.name),
      componentFileName: `${schema.name}.component`,
    }),
  ])
}
