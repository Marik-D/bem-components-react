import {bindBuilderFactoryToJsx} from './jsx'
import {createPrefixedBuilder} from './builder'

export const bem = bindBuilderFactoryToJsx(createPrefixedBuilder())

export function withPrefix(prefix: string) {
  return bindBuilderFactoryToJsx(createPrefixedBuilder(prefix))
}
