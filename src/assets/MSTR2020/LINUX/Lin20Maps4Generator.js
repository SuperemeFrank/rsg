import comment from './Lin20GeneratorComment';

/**
 * Mapping prefix text to state
 * The value is prefix text for each variable in Option.txt file
 * The key is the state name
 * The prefix with '###' to comment out means we don't provide
 * things in the generator to modify it yet, it'll take default value.
 * Remove '###' to enable the variable and change the default value of its corresponding state
 * @type {Map}
 */
export const linState2PrefixMap = new Map([
           ['licenseAgreementAccept', 'licenseAgreement.accept='],
           //userRegistration
           ['userRegistrationUser', 'userRegistration.user='],
           ['userRegistrationCompany', 'userRegistration.company='],
           ['userRegistrationCdKey', 'userRegistration.cdKey='],

           ['installInstance', 'install.Instance='],
           ['installOperation', 'install.Operation='],
           //Destination Location
           ['suiteHomeDirectory', 'suite.homeDirectory='],
           ['suiteInstallDirectory', 'suite.installDirectory='],
           ['suiteLogDirectory', 'suite.logDirectory='],
           //Select Components
           ['intelligenceActive', 'Intelligence.active='],
           ['reportServicesActive', 'ReportServices.active='],
           ['oLAPServicesActive', 'OLAPServices.active='],
           ['distributionServicesActive', 'DistributionServices.active='],
           ['transactionServicesActive', 'TransactionServices.active='],
           ['webReporterActive', 'WebReporter.active='],
           ['webAnalystActive', 'WebAnalyst.active='],
           ['webProfessionalActive', 'WebProfessional.active='],
           ['portletsActive', 'Portlets.active='],
           ['gISConnectorsActive', 'GISConnectors.active='],
           ['webServicesActive', 'WebServices.active='],
           ['mobileServerActive', 'MobileServer.active='],
           ['communityConnectorsActive', 'CommunityConnectors.active='],
           ['commandManagerActive', 'CommandManager.active='],
           ['systemManagerActive', 'SystemManager.active='],
           ['platformAnalyticsActive', 'PlatformAnalytics.active='],
           ['enterpriseManagerActive', 'EnterpriseManager.active='],
           ['integrityManagerActive', 'IntegrityManager.active='],
           ['identityServerActive', 'IdentityServer.active='],
           ['identityManagerActive', 'IdentityManager.active='],
           ['identityMobileActive', 'IdentityMobile.active='],
           ['telemetryServerActive', 'TelemetryServer.active='],
           ['libraryWebMobileActive', 'LibraryWebMobile.active='],
           ['collaborationActive', 'Collaboration.active='],
           ['certificateStoreActive', 'CertificateStore.active='],
           ['exportActive', 'Export.active='],
           //Directory Settings
           ['webUniversalDeployDirectory', 'WebUniversal.deployDirectory='],
           ['portletsInstallDirectory', 'Portlets.installDirectory='],
           [
               'gISConnectorsInstallDirectory',
               'GISConnectors.installDirectory='
           ],
           [
               'communityConnectorsInstallDirectory',
               'CommunityConnectors.installDirectory='
           ],
           ['webServicesInstallDirectory', 'WebServices.installDirectory='],
           [
               'mobileServerInstallDirectory',
               'MobileServer.installDirectory='
           ],
           [
               'commandManagerInstallDirectory',
               'CommandManager.installDirectory='
           ],
           [
               'systemManagerInstallDirectory',
               'SystemManager.installDirectory='
           ],
           [
               'platformAnalyticsInstallDirectory',
               'PlatformAnalytics.installDirectory='
           ],
           [
               'identityServerInstallDirectory',
               'IdentityServer.installDirectory='
           ],
           [
               'identityManagerInstallDirectory',
               'IdentityManager.installDirectory='
           ],
           [
               'identityMobileInstallDirectory',
               'IdentityMobile.installDirectory='
           ],
           ['cpuCountNumber', '### cpuCount.number='],
           //Telemetry Server
           [
               'telemetryServerClusterEnable',
               'TelemetryServer.cluster.enable='
           ],
           [
               'telemetryServerClusterLocalnode',
               'TelemetryServer.cluster.localnode='
           ],
           [
               'telemetryServerClusterRemotenodes',
               'TelemetryServer.cluster.remotenodes='
           ],
           //Identity Server
           ['identityServerTomcatDir', 'IdentityServer.tomcatDir='],
           ['identityServerServerDBHost', 'IdentityServer.serverDBHost='],
           ['identityServerServerDBPort', 'IdentityServer.serverDBPort='],
           ['identityServerServerDBUser', 'IdentityServer.serverDBUser='],
           [
               'identityServerServerDBPassword',
               'IdentityServer.serverDBPassword='
           ],
           [
               'identityServerServerDBInstance',
               'IdentityServer.serverDBInstance='
           ],
           [
               'identityServerServerLogDBInstance',
               'IdentityServer.serverLogDBInstance='
           ],
           ['identityServerOverwriteDb', 'IdentityServer.overwriteDb='],
           ['identityServerServerPortOne', 'IdentityServer.serverPortOne='],
           ['identityServerServerPortTwo', 'IdentityServer.serverPortTwo='],
           ['identityServerServerSslCert', 'IdentityServer.serverSslCert='],
           ['identityServerServerSslKey', 'IdentityServer.serverSslKey='],
           ['identityServerServerCaCert', 'IdentityServer.serverCaCert='],
           ['identityServerGatewayPort', 'IdentityServer.gatewayPort='],
           [
               'identityServerGatewayUseSameCert',
               'IdentityServer.gatewayUseSameCert='
           ],
           [
               'identityServerGatewaySslCert',
               'IdentityServer.gatewaySslCert='
           ],
           ['identityServerGatewaySslKey', 'IdentityServer.gatewaySslKey='],
           ['identityServerGatewayCaCert', 'IdentityServer.gatewayCaCert='],
           //identity Manager
           ['identityManagerApacheDir', 'IdentityManager.apacheDir='],
           ['identityManagerApacheUser', 'IdentityManager.apacheUser='],
           ['identityManagerApacheGroup', 'IdentityManager.apacheGroup='],
           [
               'identityManagerUseSameDBSetting',
               'IdentityManager.useSameDBSetting='
           ],
           ['identityManagerDBHost', 'IdentityManager.DBHost='],
           ['identityManagerDBPort', 'IdentityManager.DBPort='],
           ['identityManagerDBUser', 'IdentityManager.DBUser='],
           ['identityManagerDBPassword', 'IdentityManager.DBPassword='],
           ['identityManagerDBInstance', 'IdentityManager.DBInstance='],
           ['identityManagerOverwriteDb', 'IdentityManager.overwriteDb='],
           //Topology Configuration
           [
               'servicesRegistrationMachineEnvironment',
               'ServicesRegistration.machine.environment='
           ],
           [
               'servicesRegistrationServerHosts',
               'ServicesRegistration.serverHosts='
           ],
           //Registering as a service
           ['registerServices', 'RegisterServices='],
           ['registerServicesUser', 'RegisterServices.user='],
           ['registerServicesGroup', 'RegisterServices.group='],
           //Product Visibility
           ['intelligenceVisible', '### Intelligence.visible='],
           ['reportServicesVisible', '### ReportServices.visible='],
           ['oLAPServicesVisible', '### OLAPServices.visible='],
           ['distributionServicesVisible', '### DistributionServices.visible='],
           ['transactionServicesVisible', '### TransactionServices.visible='],
           ['webReporterVisible', '### WebReporter.visible='],
           ['webAnalystVisible', '### WebAnalyst.visible='],
           ['webProfessionalVisible', '### WebProfessional.visible='],
           ['portletsVisible', '### Portlets.visible='],
           ['gISConnectorsVisible', '### GISConnectors.visible='],
           ['webServicesVisible', '### WebServices.visible='],
           ['mobileServerVisible', '### MobileServer.visible='],
           ['communityConnectorsVisible', '### CommunityConnectors.visible='],
           ['commandManagerVisible', '### CommandManager.visible='],
           ['integrityManagerVisible', '### IntegrityManager.visible='],
           ['systemManagerVisible', '### SystemManager.visible='],
           ['platformAnalyticsVisible', '### PlatformAnalytics.visible='],
           ['enterpriseManagerVisible', '### EnterpriseManager.visible='],
           ['identityServerVisible', '### IdentityServer.visible='],
           ['identityManagerVisible', '### IdentityManager.visible='],
           ['identityMobileVisible', '### IdentityMobile.visible='],
           ['telemetryServerVisible', '### TelemetryServer.visible='],
           ['libraryWebMobileVisible', '### LibraryWebMobile.visible='],
           ['collaborationVisible', '### Collaboration.visible='],
           ['certificateStoreVisible', '### CertificateStore.visible='],
           ['exportVisible', '### Export.visible='],

           ['installOnDemandStyle', '### InstallOnDemand.style='],
           [
               'installOnDemandSourceLocation',
               '### InstallOnDemand.sourceLocation='
           ],
           ['installOnDemandUrl', '### InstallOnDemand.url='],
           [
               'installOnDemandBypassCertificateChecking',
               '### InstallOnDemand.bypassCertificateChecking='
           ],
           ['installOnDemandUser', '### InstallOnDemand.user='],
           ['installOnDemandPassword', '### InstallOnDemand.password=']
       ]);

/**
 * Mapping the comments that should appear before each prefix text
 * The key is prefix text for each variable in Option.txt file
 * The value is the comments content
 * @type {Map}
 */
export const linState2CommentMap = new Map([
           ['licenseAgreementAccept', comment.licenseAgreementAccept],
           //userRegistration
           ['userRegistrationUser', comment.userRegistrationUser],
           ['userRegistrationCompany', comment.userRegistrationCompany],
           ['userRegistrationCdKey', comment.userRegistrationCdKey],

           ['installInstance', comment.installInstance],
           ['installOperation', comment.installOperation],
           //Destination Location
           ['suiteHomeDirectory', comment.suiteHomeDirectory],
           ['suiteInstallDirectory', ''],
           ['suiteLogDirectory', ''],
           //Select Components
           ['intelligenceActive', comment.intelligenceActive],
           ['reportServicesActive', comment.reportServicesActive],
           ['oLAPServicesActive', comment.oLAPServicesActive],
           ['distributionServicesActive', comment.distributionServicesActive],
           ['transactionServicesActive', comment.transactionServicesActive],

           ['webReporterActive', comment.webReporterActive],
           ['webAnalystActive', comment.webAnalystActive],
           ['webProfessionalActive', comment.webProfessionalActive],
           ['portletsActive', comment.portletsActive],
           ['gISConnectorsActive', comment.gISConnectorsActive],

           ['webServicesActive', comment.webServicesActive],
           ['mobileServerActive', comment.mobileServerActive],
           ['communityConnectorsActive', comment.communityConnectorsActive],
           ['commandManagerActive', comment.commandManagerActive],
           ['systemManagerActive', comment.systemManagerActive],
           ['platformAnalyticsActive', comment.platformAnalyticsActive],
           ['enterpriseManagerActive', comment.enterpriseManagerActive],
           ['integrityManagerActive', comment.integrityManagerActive],
           ['identityServerActive', comment.identityServerActive],
           ['identityManagerActive', comment.identityManagerActive],
           ['identityMobileActive', comment.identityMobileActive],

           ['telemetryServerActive', comment.telemetryServerActive],
           ['libraryWebMobileActive', comment.libraryWebMobileActive],
           ['collaborationActive', comment.collaborationActive],
           ['certificateStoreActive', comment.certificateStoreActive],
           ['exportActive', comment.exportActive],
           //Directory Settings
           ['webUniversalDeployDirectory', comment.webUniversalDeployDirectory],
           ['portletsInstallDirectory', comment.portletsInstallDirectory],
           [
               'gISConnectorsInstallDirectory',
               comment.gISConnectorsInstallDirectory
           ],
           [
               'communityConnectorsInstallDirectory',
               comment.communityConnectorsInstallDirectory
           ],
           ['webServicesInstallDirectory', comment.webServicesInstallDirectory],
           [
               'mobileServerInstallDirectory',
               comment.mobileServerInstallDirectory
           ],
           [
               'commandManagerInstallDirectory',
               comment.commandManagerInstallDirectory
           ],
           [
               'systemManagerInstallDirectory',
               comment.systemManagerInstallDirectory
           ],
           [
               'platformAnalyticsInstallDirectory',
               comment.platformAnalyticsInstallDirectory
           ],
           [
               'identityServerInstallDirectory',
               comment.identityServerInstallDirectory
           ],
           [
               'identityManagerInstallDirectory',
               comment.identityManagerInstallDirectory
           ],
           [
               'identityMobileInstallDirectory',
               comment.identityMobileInstallDirectory
           ],
           ['cpuCountNumber', comment.cpuCountNumber],
           //Telemetry Server
           [
               'telemetryServerClusterEnable',
               comment.telemetryServerClusterEnable
           ],
           [
               'telemetryServerClusterLocalnode',
               comment.telemetryServerClusterLocalnode
           ],
           [
               'telemetryServerClusterRemotenodes',
               comment.telemetryServerClusterRemotenodes
           ],
           //Identity Server
           ['identityServerTomcatDir', comment.identityServerTomcatDir],
           ['identityServerServerDBHost', comment.identityServerServerDBHost],
           ['identityServerServerDBPort', ''],
           ['identityServerServerDBUser', ''],
           ['identityServerServerDBPassword', ''],
           ['identityServerServerDBInstance', ''],
           ['identityServerServerLogDBInstance', ''],
           ['identityServerOverwriteDb', comment.identityServerOverwriteDb],
           ['identityServerServerPortOne', comment.identityServerServerPortOne],
           ['identityServerServerPortTwo', comment.identityServerServerPortTwo],
           ['identityServerServerSslCert', comment.identityServerServerSslCert],
           ['identityServerServerSslKey', comment.identityServerServerSslKey],
           ['identityServerServerCaCert', comment.identityServerServerCaCert],
           ['identityServerGatewayPort', comment.identityServerGatewayPort],
           [
               'identityServerGatewayUseSameCert',
               comment.identityServerGatewayUseSameCert
           ],
           [
               'identityServerGatewaySslCert',
               comment.identityServerGatewaySslCert
           ],
           ['identityServerGatewaySslKey', comment.identityServerGatewaySslKey],
           ['identityServerGatewayCaCert', comment.identityServerGatewayCaCert],
           //identity Manager

           ['identityManagerApacheDir', comment.identityManagerApacheDir],
           ['identityManagerApacheUser', ''],
           ['identityManagerApacheGroup', ''],
           [
               'identityManagerUseSameDBSetting',
               comment.identityManagerUseSameDBSetting
           ],
           ['identityManagerDBHost', [comment.identityMDB]],
           ['identityManagerDBPort', ''],
           ['identityManagerDBUser', ''],
           ['identityManagerDBPassword', ''],
           ['identityManagerDBInstance', comment.identityManagerDBInstance],
           ['identityManagerOverwriteDb', comment.identityManagerOverwriteDb],
           //Topology Configuration
           [
               'servicesRegistrationMachineEnvironment',
               comment.servicesRegistrationMachineEnvironment
           ],
           [
               'servicesRegistrationServerHosts',
               comment.servicesRegistrationServerHosts
           ],
           //Registering as a service
           ['registerServices', comment.registerServices],
           ['registerServicesUser', comment.registerServicesUser],
           ['registerServicesGroup', ''],
           ['intelligenceVisible', comment.intelligenceVisible],
           ['reportServicesVisible', comment.reportServicesVisible],
           ['oLAPServicesVisible', comment.oLAPServicesVisible],
           ['distributionServicesVisible', comment.distributionServicesVisible],
           ['transactionServicesVisible', comment.transactionServicesVisible],
           ['webReporterVisible', comment.webReporterVisible],
           ['webAnalystVisible', comment.webAnalystVisible],
           ['webProfessionalVisible', comment.webProfessionalVisible],
           ['portletsVisible', comment.portletsVisible],
           ['gISConnectorsVisible', comment.gISConnectorsVisible],
           ['webServicesVisible', comment.webServicesVisible],
           ['mobileServerVisible', comment.mobileServerVisible],
           ['communityConnectorsVisible', comment.communityConnectorsVisible],
           ['commandManagerVisible', comment.commandManagerVisible],
           ['integrityManagerVisible', comment.integrityManagerVisible],
           ['systemManagerVisible', comment.systemManagerVisible],
           ['platformAnalyticsVisible', comment.platformAnalyticsVisible],
           ['enterpriseManagerVisible', comment.enterpriseManagerVisible],
           ['identityServerVisible', comment.identityServerVisible],
           ['identityManagerVisible', comment.identityManagerVisible],
           ['identityMobileVisible', comment.identityMobileVisible],
           ['telemetryServerVisible', comment.telemetryServerVisible],
           ['libraryWebMobileVisible', comment.libraryWebMobileVisible],
           ['collaborationVisible', comment.collaborationVisible],
           ['certificateStoreVisible', comment.certificateStoreVisible],
           ['exportVisible', comment.exportVisible],
           ['installOnDemandStyle', comment.installOnDemandStyle],
           [
               'installOnDemandSourceLocation',
               comment.installOnDemandSourceLocation
           ],
           ['installOnDemandUrl', comment.installOnDemandUrl],
           [
               'installOnDemandBypassCertificateChecking',
               comment.installOnDemandBypassCertificateChecking
           ],
           ['installOnDemandUser', comment.installOnDemandUser],
           ['installOnDemandPassword', comment.installOnDemandPassword]
       ]);
