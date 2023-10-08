import getDependencies from 'helpers/getDependencies'
import installDependency from 'helpers/installDependency'
import { PackageInfo } from 'types'

const installDependencies = async (packageInfo: PackageInfo) => {
  Object.freeze([true, false]).forEach((isDevelopment) => {
    getDependencies(packageInfo, isDevelopment).forEach((dependency) => {
      installDependency(dependency, packageInfo, isDevelopment)
    })
  })
}

export default installDependencies
