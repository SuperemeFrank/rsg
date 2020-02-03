

const comment = {};

comment.expressMode = `
######################################
## MicroStrategy 11.2 Response File ##
######################################
#
# This file contains entries targeted to Custom Mode, which will install and configure the full platform on one machine.
#
# For more information on Silent Install please refer to the section on "Installing and configuring with a response.ini file" in the Installation and Configuration guide available at http://www2.microstrategy.com/producthelp/manuals/en/InstallationConfig.pdf.
#
# We are working to improve our Silent and Automated installation use-cases.  Feedback on Silent or Automated installations is welcomed via the MicroStrategy Community (Platform Services > Platform > Secure Enterprise - Windows) or via Technical Support to the Deployment Team.
# Here is a direct link (as of Jun 2017) to the Community sub-section on platform deployment: https://success.microstrategy.com/s/topic/0TO44000000FlkJGAS/Secure%20Enterprise%20-%20Windows%20-%20U092?tabset-215d6=1
#
######################################
##		Usage		                ##
######################################
#
# In an Administrator Command Line window (Windows Button > CMD, Right Click and Run As Administrator)
#
# Silent Install Usage: #PathToSetupExe# --responseFile="#PathToResponseIni#" -s -f1#PathToSetupIss# -f2#PathToLogFile#
#
# Example: C:\\Setup.exe --responseFile="C:\\response_custom.ini" -s -f1C:\\Setup.iss -f2C:\\Setup.log
#
# This assumes the following:
#
# Setup.exe is located at: C:\\Setup.exe
# MicroStrategy Response File is located at: C:\\response_custom.ini
# Installer Setup.iss is located at: C:\\Setup.iss
# Output Log file should be written to: C\\Setup.log
#
#
# Response entries start here, replace any text between angled brackets (<>) with your own text

[Installer]
`;

comment.forceReboot = `

# After initial installation is finished, choose whether to automatically reboot the machine.
# A reboot is required.
# TRUE  - Indicates the machine will automatically reboot (recommended)
# FALSE - Indicates that no automatic reboot will be performed.  Task Manager (setup.exe) or the Install.log may be used to determine once the installation is finished as no other indication will be provided.
`;

comment.logFile = `
###ConfigWizardResponseFile=Response.ini
# Path and File Name for the Installation Log file.
# If no value is specified, the default location will be used: C:\\Program Files (x86)\\Common Files\\MicroStrategy\\install.log
`;

comment.hideWelcomeDialog = `

[Welcome]
`;

comment.hideUserRegistrationDialog = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Customer Information
#
# Please specify your first name, last name, email address, the name of the company
# for which you work and the license key.
#
# If MicroStrategy Identity is installed, this information is used to create the initial MicroStrategy Identity Network and user badge.

[UserRegistration]
`;

comment.userFirstName = `

# First name of user
`;

comment.userLastName = `

# Last name of user
`;

comment.userEmail = `

# Email address of user
`;

comment.companyName = `

# Company
`;

comment.licenseKey = `

# License key
`;

comment.hideLicenseDetailDialog = `

[LicenseDetail]
`;

comment.hideSetupExpressDialog = `

[SetupExpress]
`;

comment.hideSuiteTargetDialog = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Product Install Location.
# Use the following values to specify the install location for MicroStrategy products.
# The default path of TargetDirectory is C:\\Program Files (x86)\\MicroStrategy
# The default path of COMMONFILES is C:\\Program Files (x86)\\Common Files\\MicroStrategy

[SuiteTarget]
`;


comment.commonFiles = `

[InitialPaths]
`;

comment.hideComponentSelectionDialog = `

[ComponentSelection]
`;

comment.developerVisible = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Product Visibility State
#
# For GUI based installations, this section provides a visibility state setting for every MicroStrategy product. 
# Legal values are:
# 
#    TRUE  - Indicates that the product is visible for selection or deselection
#    FALSE - Indicates that the product is not visible for selection or deselection
# 
# The default value for visibility state settings is "true".
#
# For example, to make "MicroStrategy Intelligence" visible
# for selection or deselection
# 
#    IntelligenceVisible=TRUE
#
# All licensed products are visible by default, so in case you want to prevent 
# them from being visible, make sure they are set to false.

`;

comment.identityServerVisible = `
# New in 10.3
`;

comment.telemetryServerVisible = `
# New in 10.5
`;

comment.libraryWebMobileVisible = `
# New in 10.9
`;

comment.dataServerVisible = `
# New in 11.0
`;

comment.exportVisible = `
# New in 11.2
`;

comment.developerSelect = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Product Selection State
#
# Determines which products are installed (GUI and Silent).  A selection state setting is available for every MicroStrategy product. 
# Legal values are:
# 
#    TRUE  - Indicates that the product is selected for installation
#    FALSE - Indicates that the product is not selected for installation
# 
# The default value for Selection state settings is "true".
#
# For example, to select "MicroStrategy Intelligence" 
# for installation use
# 
#    IntelligenceSelect=TRUE
#
# Most licensed products are selected by default, so in case you want to prevent 
# them from being installed make sure they are unselected too.

`;

comment.identityServerSelect = `
# New in 10.3
`;

comment.telemetryServerSelect = `
# New in 10.5
`;

comment.libraryWebMobileSelect = `
# New in 10.9
`;

comment.dataServerSelect = `
# New in 11.0
`;
comment.exportSelect = `
# New in 11.2
`;

comment.hideServicesRegConfigDialog = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# Topology Configuration
# The Workstation Topology helps administrators to monitor and manage services 
# in a MicroStrategy environment. Choose your configuration below.

[ServicesRegConfig]
`;

comment.multipleMachineEnvironment = `

# If MultipleMachineEnvironment=FALSE, this machine will be set as a server node in the environment.
# Otherwise, please specify server nodes in ServersInCluster option.
`;


comment.serversInCluster = `

# The input below will be entered identically for all configured machines in this environment.
# Example: servername1.acme.com; servername2.acme.com; servername3.acme.com
# It is recommended to configure an odd number of servers in a cluster
`;

comment.hideTelemetryServerConfigDialog = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# Telemetry Server Cluster Configuration
[TelemetryServerConfig]
`;

comment.telemetryServerLocalNode = `
# Please provide local node's hostname
`;

comment.telemetryServerRemoteNodes = `
# Please provide a semicolon separated list of remote nodes' hostname
`;

comment.hideIdentityConfigDialog = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# MicroStrategy Identity Product Configuration
# The parameters in [IdentityConfig] section only apply when MicroStrategy Identity Products are selected.
[IdentityConfig]
`;

comment.expressSkipIdentityConfig = `

# For Custom install, ExpressSkipIdentityConfig has to be FALSE for installation to proceed
# For Express install, if ExpressSkipIdentityConfig=TRUE, the rest of the values in this section will be ignored and MicroStrategy Identity will NOT be configured
`;

comment.caCertificateChain = `

# Path and File Name for the Certificate Bundle (Chain), typically .pem. e.g. C:\\certs\\labs.pem
`;

comment.serverCertificate = `

# Path and File Name for the Server Certificate. e.g. C:\\certs\\labs.crt
`;


comment.serverCertificateKey = `

# Path and File Name for the Server Certificate Key file. e.g. C:\\certs\\labs.key
`;

comment.serverCertificateKeyPasswordFile = `

# Optional: Path and File Name to the file which contains the password to the Server Certificate Key (.key) file.
`;

comment.smtpServer = `


# SMTP Server name
`;

comment.smtpServerPort = `

# SMTP Server port number
`

comment.smtpUseSSL = `

# Optional: SMTP Server Using SSL 
`;

comment.smtpUser = `

# Optional: SMTP User name
`

comment.smtpUserPassword = `

# Optional: SMTP user password
`;

comment.smtpEmail = `

# SMTP email 
`;

comment.fqdn = `

# Fully Qualified Domain Name
`;

comment.hideOpenSourceSoftwareDialogDialog = `

# New in 10.8
[OpenSourceSoftwareDialog]
`;

comment.agreeToDownloadOpenSourceSoftware = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Agreement to download Open Source Software Installation Files
# MicroStrategy Identity require MySQL
# TRUE - Indicates you agree for the installation to automatically download the required open source software installation files on your behalf.
# FALSE - Indicates the open source software files are pre-downloaded in the User's Downloads folder. (Typically C:\\Users\\<user>\\Downloads)
# Default is FALSE
`;




comment.hideServerDefinitionSettingDialog = `



[ServerDefinitionSetting]
`;

comment.hideAnalyticsSettingDialog = `

[AnalyticsSetting]
`;

comment.HideWebVirtualDirectoryDialog = `

[WebVirtualDirectory]
`;

comment.hideMobileVirtualDirectoryDialog = `

[MobileVirtualDirectory]
`;

comment.hidePortalVirtualDirectoryDialog = `

[PortalVirtualDirectory]
`;

comment.hideWebServicesVirtualDirectoryDialog = `

[WebServicesVirtualDirectory]
`;


comment.hideOfficeWebServicesURLDialog = `

[OfficeWebServicesURL]
`;


comment.hideMSOfficeLoadOptionsDialog = `

[MSOfficeLoadOptions]
`;


comment.hideIntelligenceServiceAccountDialog = `

[IntelligenceServiceAccount]
`;


comment.hideNarrowcastServiceAccountDialog = `

[NarrowcastServiceAccount]
`;



comment.hideSummaryDialog = `

[Summary]
`;


comment.hideFinishDialog = `

[Finish]
`;

export default comment;