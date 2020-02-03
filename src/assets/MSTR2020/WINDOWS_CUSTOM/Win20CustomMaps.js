
/**
 *  Mapping the key of TreeNode to states in WindowsInstall.js
 * the key is the value of 'key' for each TreeNode in FeatureSelection Page
 * the value is the corresponding state of that TreeNode
 * @type {Map}
 */
export const featureKey2StateMap = new Map([
  ['7.2', 'developerSelect'],
  ['7.1', 'analystSelect'],
  ['7.3', 'architectSelect'],
  ['7.4', 'serverAdminSelect'],
  ['7.3.1', 'functionPluginSelect'],
  ['10', 'commandManagerSelect'],
  ['11', 'enterpriseManagerSelect'],
  ['9', 'objectManagerSelect'],
  ['12', 'integrityManagerSelect'],
  ['1', 'intelligenceSelect'],
  ['1.4', 'intelligenceOLAPServicesSelect'],
  ['1.3', 'intelligenceReportServicesSelect'],
  ['1.5', 'intelligenceDistributionServicesSelect'],
  ['1.6', 'intelligenceTransactionServicesSelect'],
  ['2.3', 'webAnalystSelect'],
  ['2.4', 'webProfessionalSelect'],
  ['2.5', 'webReporterSelect'],
  ['2.1', 'webServerASPNETSelect'],
  ['2.2', 'webServerJSPSelect'],
  ['4.2.1', 'webServicesASPNETSelect'],
  ['4.2.2', 'webServicesJSPSelect'],
  ['4.1', 'officeSelect'],
  ['5', 'mobileSelect'],
  ['5.1', 'mobileServerASPSelect'],
  ['5.2', 'mobileServerJSPSelect'],
  ['17', 'analyticsModulesSelect'],
  ['14.1', 'ncsAdminSelect'],
  ['14.2', 'deliveryEngineSelect'],
  ['14.3', 'subscriptionPortalSelect'],
  ['14.4.1', 'tutorialDeliveryInstallSelect'],
  ['14.4.2', 'tutorialDeliveryConfigureSelect'],
  ['21.1', 'sequeLinkSelect'],
  ['2.6', 'portletsSelect'],
  ['21.2', 'mdxCubeProviderSelect'],
  ['2.7', 'gisConnectorsSelect'],
  ['13', 'systemManagerSelect'],
  ['19.1', 'identityServerSelect'],
  ['19.2', 'identityManagerSelect'],
  ['20', 'usherProfessionalSelect'],
  ['8', 'telemetryServerSelect'],
  ['21.3', 'tomcatSelect'],
  ['21.4', 'mySQLSelect'],
  ['3.1', 'libraryWebMobileSelect'],
  ['3.2', 'collaborationSelect'],
  ['6', 'communityConnectorsSelect'],
  ['16', 'platformAnalyticsSelect'],
  ['15', 'certificateStoreSelect'],
  ['18', 'exportSelect'],
]);

/**
 * Mapping the picture url to specific state in order to control the picture
 * display in wev&mobileVDS and portal&mdxVDS pages in Windows Installation.
 * The key is the url of picture
 * The value is the state in WindowsInstall.js
 * @type {Map}
 */
export const pic2StateMap = new Map([
  // windows 2020
  [
    'assets/MSTR2020/WINDOWS_CUSTOM/pics/9 MicroStrategy Web (ASP .NET) setting.png',
    'webServerASPNETSelect',
  ],
  [
    'assets/MSTR2020/WINDOWS_CUSTOM/pics/5 Open Source Download.png',
    'mySQLSelect'
  ],
  [
    'assets/MSTR2020/WINDOWS_CUSTOM/pics/10 MicroStrategy Mobile Server (ASP .NET) Virtual Directory Name.png',
    'mobileServerASPSelect',
  ],
  [
    'assets/MSTR2020/WINDOWS_CUSTOM/pics/11 MicroStrategy Subscription Portal Virtual Directory Name.png',
    'subscriptionPortalSelect',
  ],
  [
    'assets/MSTR2020/WINDOWS_CUSTOM/pics/12 MicroStrategy MDX Cube Provider Virtual Directory Name.png',
    'mdxCubeProviderSelect',
  ],
]);
