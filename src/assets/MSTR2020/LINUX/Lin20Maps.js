
/**
 * Mapping the features whose installation directory can be set
 * to the state that aim to store the directory path.
 * The key is the key of TreeNode in feature selection page
 * The value is the state name
 * @type {Map}
 */

export const featureDirectory2StateMap = new Map([
  ['2', 'webUniversalDeployDirectory'],
  ['2.4', 'portletsInstallDirectory'],
  ['2.5', 'gISConnectorsInstallDirectory'],
  ['5', 'communityConnectorsInstallDirectory'],
  ['6', 'webServicesInstallDirectory'],
  ['4.1', 'mobileServerInstallDirectory'],
  ['9', 'commandManagerInstallDirectory'],
  ['10', 'systemManagerInstallDirectory'],
  ['11', 'platformAnalyticsInstallDirectory'],
  ['15.1', 'identityServerInstallDirectory'],
  ['15.2', 'identityManagerInstallDirectory'],
  ['16', 'identityMobileInstallDirectory'],
]);


/**
 * Mapping the features' keys to the states.
 * The key is the key of TreeNode in feature selection page
 * The value is the state name
 * @type {Map}
 */
export const featureKey2StateMap = new Map([
  ['1', 'intelligenceActive'],
  ['1.3', 'reportServicesActive'],
  ['1.2', 'oLAPServicesActive'],
  ['1.1', 'distributionServicesActive'],
  ['1.4', 'transactionServicesActive'],
  ['2.1', 'webReporterActive'],
  ['2.2', 'webAnalystActive'],
  ['2.3', 'webProfessionalActive'],
  ['2.4', 'portletsActive'],
  ['2.5', 'gISConnectorsActive'],
  ['6', 'webServicesActive'],
  ['4.1', 'mobileServerActive'],
  ['5', 'communityConnectorsActive'],
  ['9', 'commandManagerActive'],
  ['10', 'systemManagerActive'],
  ['11', 'platformAnalyticsActive'],
  ['13', 'enterpriseManagerActive'],
  ['8', 'integrityManagerActive'],
  ['15.1', 'identityServerActive'],
  ['15.2', 'identityManagerActive'],
  ['16', 'identityMobileActive'],
  ['7', 'telemetryServerActive'],
  ['3.1', 'libraryWebMobileActive'],
  ['3.2', 'collaborationActive'],
  ['12', 'certificateStoreActive'],
  ['14', 'exportActive'],
]);
