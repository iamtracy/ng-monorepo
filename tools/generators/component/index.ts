import { ChangeDetectionStrategy } from '@angular/core';
import { externalSchematic, chain, Rule } from '@angular-devkit/schematics'
import { join } from 'path'

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      name: schema.name,
      project: 'ui-components',
    }),
    externalSchematic('@ngneat/spectator', 'spectator-component', {
      changeDetection: ChangeDetectionStrategy.OnPush,
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
      componentPath: join('lib', schema.name),
      libPath: join('libs', 'ui', 'components', 'src'),
      project: 'ui-components',
    }),
  ])
}
