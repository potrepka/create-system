import copyFiles from 'scripts/copyFiles'
import createPackageDescriptor from 'scripts/createPackageDescriptor'
import installDependencies from 'scripts/installDependencies'

const createSystem = async () => {
  const packageInfo = await createPackageDescriptor()
  installDependencies(packageInfo)
  copyFiles(packageInfo)
}

export default createSystem
