const comment = {};

comment.licenseAgreementAccept = `
## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Options File Template
#
# This file is a options file (i.e., response file) for the MicroStrategy
# Installer. The options file is loaded by default if it is named "options.txt"
# and it is located in the same directory as setup.sh. 
# An alternative options file can be specified by using "-options" on 
# the command line.
# 
# The settings that can be specified for the wizard are listed below. To use
# this template, follow these steps:
# 
#    1. Enable a setting below by removing leading '###' characters from the
#    line (search for '###' to find settings you can change).
# 
#    2. Specify a value for a setting by replacing the character's '<value>'.
#    Read each setting's documentation for information on how to specify its
#    value.
# 
#    3. Save the changes to the file.
#
#    4. Launch the installation using the setup.sh script
#  
#
# We are working to improve our Silent and Automated installation use-cases.  Feedback on 
# Silent or Automated installations is welcomed via the MicroStrategy Community (Platform
# Services > Platform > Secure Enterprise - Linux) or via Technical Support to the Deployment Team.
#
# Here is a direct link (as of June 2017) to the Community sub-section on platform deployment:
# https://success.microstrategy.com/s/topic/0TO44000000FlkIGAS/Secure%20Enterprise%20-%20Linux%20-%20U092?tabset-215d6=1
#
#


## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
#   Silent Installation.
#
#   The options file is required for silent installations, specify -silent 
#    -options <file-name> as a command line arguments to the wizard, where
#    <file-name> is the name of this options file.
#
#       For example:
#
#	setup.sh -silent -options options.txt
#


## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# 
#	System Requirements Warnings
#
#	The silent installation will install MicroStrategy even if some system 
# 	requirements are not completely meet. 
#	Please read the release notes file and configure your system so it meets the 
# 	requirements before running this setup and check the installation log after 
#	the installation is complete.
# 	 


## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Installation Properties
#
# Please specify general installation properties.


## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy License Agreement Default Selection
#
# In the MicroStrategy Installation Wizard, it is legally required to accept the
# MicroStrategy License Agreement in order to proceed with the desired installation
# operation.
# Use this option to specify the default selected option selected for the License 
# Agreement Dialog. Legal values are:
#
#    true	- Accept the License Agreement
#    false	- Do not accept the License Agreement
#
# If no option is provided, 'reject' is used as default.

`;


comment.userRegistrationUser = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Customer Information
#
# Please specify your name, the name of the company for which you work and the 
# license key.

# User
`;

comment.userRegistrationCompany = `
# Company
`;

comment.userRegistrationCdKey = `
# License Key
`;



comment.installInstance = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Installation Selection
#
# For a new Installation, use "new" (i.e. install.Instance=new)
#
# For an existing Installation, specify its home path.
# Home path is a directory that identifies an installation and stores 
# configuration files and application launchers (suite.homeDirectory in 
# MicroStrategy Install Locations section). You may refer to <home> tag under 
# <suite>MstrSuite</suite> in mstrinstall.xml.
#
#       For example 
#
#       install.Instance=/home/user/MicroStrategy
#

`;



comment.installOperation = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Operation to perform on instance
#
# For a new Installation, Legal values are: 
#    FRESH_INSTALL  - Indicates a new installation will be performed
#
# For an existing Installation, Legal values are: 
#    MODIFY            - Indicates the installation will be modified.
#    REPAIR            - Indicates the installation will be repaired.
#    UNINSTALL         - Indicates the installation will be uninstalled.
#    UPGRADE           - Indicates the installation will be upgraded
#    REMOVE_UPDATE     - Indicates a update package will be removed
#
#       For example 
#
#       install.Operation=MODIFY
#

`;


comment.suiteHomeDirectory = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Install Locations
#
# The install locations of the product. Specify a valid directories into which 
# the product should be installed.
# It is recommended to specify a different directory for each one of the install 
# locations:
#
#  Home    - This directory will store configuration files and application launchers
#  Install - This directory will store all the binaries and other static files
#  Log     - Application logs will be created here.
#
# NOTE: Special characters (!,%,$,^,\\,?,#) and space characters are not valid. All
# special characters will be ignored.

`;

comment.intelligenceActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Product Selection State
#
# A selection state setting is available for every MicroStrategy product. 
# Legal values are:
# 
#    true  - Indicates that the product is selected for installation
#    false - Indicates that the product is not selected for installation
# 
# The default value for Selection state settings is "true".
#
# For example, to select "MicroStrategy Intelligence Universal Edition"
# for installation use
# 
#    Intelligence.active=true
#
# All licensed products are selected by default, so in case you want to prevent 
# them from being installed make sure they are unselected too.


## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Intelligence Universal Edition
#
#  MicroStrategy Intelligence Universal Edition will be automatically
#  selected for installation if any of the following products are selected for
#  installation:
#       "MicroStrategy Report Services Universal", 
#       "MicroStrategy OLAP Services Universal"
#       "MicroStrategy Distribution Services"
#       "MicroStrategy Transaction Services"

# MicroStrategy Intelligence Universal Edition
`;

comment.reportServicesActive = `
#   MicroStrategy Report Services Universal
`;

comment.oLAPServicesActive = `
# MicroStrategy OLAP Services Universal
`;

comment.distributionServicesActive = `
# MicroStrategy Distribution Services
`;


comment.transactionServicesActive = `
# MicroStrategy Transaction Services
`;

comment.webReporterActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# MicroStrategy Web Universal
#
#  MicroStrategy Web Universal Reporter will be automatically selected for
#  installation if MicroStrategy Web Universal Analyst is selected.
#
#  MicroStrategy Web Universal Reporter & Analyst will be automatically selected
#  for installation if MicroStrategy Web Universal Professional is selected.


# MicroStrategy Web Universal Reporter
`;

comment.webAnalystActive = `
# MicroStrategy Web Universal Analyst
`;

comment.webProfessionalActive = `
# MicroStrategy Web Universal Professional
`;

comment.portletsActive = `
# MicroStrategy Portlets
`;


comment.gISConnectorsActive = `
# MicroStrategy GIS Connectors
`;

comment.webServicesActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Web Services J2EE

`;


comment.mobileServerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Mobile Server JSP

`;



comment.communityConnectorsActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Community Connectors
# 

`;



comment.commandManagerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Command Manager

`;



comment.systemManagerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy System Manager

`;



comment.platformAnalyticsActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Platform Analytics

`;



comment.enterpriseManagerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Enterprise Manager

`;



comment.integrityManagerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Integrity Manager

`;



comment.identityServerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# MicroStrategy MicroStrategy Identity
#

# MicroStrategy Identity Server
`;

comment.identityManagerActive = `
#  MicroStrategy Identity Manager
`;

comment.identityMobileActive = `
# MicroStrategy Identity Mobile
`;


comment.telemetryServerActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Telemetry Server

`;



comment.libraryWebMobileActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#  
# New in 10.9
# MicroStrategy Library Web & Mobile

`;



comment.collaborationActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# New in 10.9
# MicroStrategy Collaboration

`;



comment.certificateStoreActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# New in 11.0
# MicroStrategy Certificate Store

`;


comment.exportActive = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# New in 11.2
# MicroStrategy Export

`;


comment.webUniversalDeployDirectory = ` 

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Product Install Location.
# Use the following values to specify the install location for individual products.
#
# Warning: Special (!,%,$,^,\\,?,#) and space characters are not valid. All special 
# characters will be ignored.

# Web Universal
`;

comment.portletsInstallDirectory = `
# MicroStrategy Portlets
`;

comment.gISConnectorsInstallDirectory = `
# MicroStrategy GIS Connectors
`;

comment.communityConnectorsInstallDirectory = `
# MicroStrategy Community Data Connectors
`;

comment.webServicesInstallDirectory = `
# MicroStrategy Web Services J2EE
`;

comment.mobileServerInstallDirectory = `
# MicroStrategy Mobile Server JSP 
`;


comment.commandManagerInstallDirectory = `
# MicroStrategy Command Manager
`;

comment.systemManagerInstallDirectory = `
# MicroStrategy System Manager Install Location
`;

comment.platformAnalyticsInstallDirectory = `
# MicroStrategy Platform Analytics Install Location
`;

comment.identityServerInstallDirectory = `
# MicroStrategy Identity Server
`;

comment.identityManagerInstallDirectory = `
#  MicroStrategy Identity Manager
`;

comment.identityMobileInstallDirectory = `
# MicroStrategy Identity Mobile
`;

comment.cpuCountNumber = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# CPU License Information
#
# This value should be specified when the license being used for MicroStrategy
# Intelligence Universal Edition is based on CPUs. Legal values are integers
# between 1 and either the number of CPUs allowed by the license or the number of 
# CPUs in the machine, whichever is lower. 
#
# For example to set the number of CPUs to 2, use:
#
# cpuCount.number=2
#
# To set this options to the maximum value allowed, use:
#
# cpuCount.number=maximum
#
# The default value for this setting is "maximum" 

`;




comment.telemetryServerClusterEnable = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Telemetry Server Configuration
#
# This step allows you to cluster the Telemetry Servers that will be used to send usage data to 
# Platform Analytics.
#
# If you plan to install three or more Telemetry Servers in your environment, you must check the 
# box below during the installation of each Telemetry Server. Failing to do so will result in 
# manual configuration to create the cluster after the installation.
# 
# For more information refer to the online help.
#
# Please note that Telemetry Server is installed by default when you install and Intelligence
# or Platform Analytics.

# Create a cluster of three or more Telemetry Servers
#    true	- Creates a Telemetry Server cluster
#    false	- Configures Telemetry Server as a single node.
# The default value is false.
`;


comment.telemetryServerClusterLocalnode = `
# Provide the Fully Qualified Domain Name of the local Telemetry Server (do not use "localhost" 
# or the loopback IP address "127.0.0.1")
`;

comment.telemetryServerClusterRemotenodes = `
# Provide the Fully Qualified Domain Name of all the remote Telemetry Servers that you have 
# installed or will install. Separate the Fully Qualified Name using semicolons. 
# For example: node.mydomain.com; othernode.mydomain.com
`;


comment.identityServerTomcatDir = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Identity Server Information
#
# Please specify the information required for the MicroStrategy Identity Server
# configuration.

# Tomcat directory location for MicroStrategy Identity Server
`;


comment.identityServerServerDBHost = `
# MicroStrategy Identity Server installs a database which is a system of record for
# individual Usher identities. Please provide the configuration parameters for 
# the MicroStrategy Identity Server to communicate with the database with MySQL
# Community Edition 5.0 or higher.
`;

comment.identityServerOverwriteDb = `
# For new installations use this option to indicate if any existing schema should be 
# dropped or preserved.
#    true	- Drop the schema and create a fresh configuration.
#    false	- Preserve the schema and upgrade it if necessary.
# The default value is false.
`;

comment.identityServerServerPortOne = `
# Please specify the information required for setting up a trust-relationship for
# MicroStrategy Identity Server using the Public-key Infrastructure (PKI).
# Server (one-way SSL) authentication only - Port
`;

comment.identityServerServerPortTwo = `
# Client and Server (two-way SSL) mutual authentication - Port
`;

comment.identityServerServerSslCert = `
# Public key SSL certificate file (.crt)
`;

comment.identityServerServerSslKey = `
# Private key file (.key)
`;

comment.identityServerServerCaCert = `
# Certification Authority's (CA) certificate file (.pem)
`;

comment.identityServerGatewayPort = `
# Please specify the information required for setting up a trust-relationship for
# Agent Gateway using the Public-key Infrastructure (PKI).
# Agent Gateway (one-way SSL) authentication only - Port
`;

comment.identityServerGatewayUseSameCert = `
# Use this option to specify if you want to use the same SSL certificate as MicroStrategy
# Identity Server.
#    true	- Use the same SSL certificates
#    false	- Do not use the same SSL certificates
`;


comment.identityServerGatewaySslCert = `
# Public key SSL certificate file (.crt)
`;


comment.identityServerGatewaySslKey = `
# Private key file (.key)
`;


comment.identityServerGatewayCaCert = `
# Certification Authority's (CA) certificate file (.pem)
`;

comment.identityManagerApacheDir = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Identity Manager Information
#
# Please specify the information required for the MicroStrategy Identity Manager
# configuration.

# Apache directory location and user credentials for MicroStrategy Identity Manager
`;

comment.identityManagerUseSameDBSetting = `
# MicroStrategy Identity Manager installs a database to manage Usher identities. Please
# provide the configuration parameters for the MicroStrategy Identity Manager to
# communicate with the database.
#
# Use this option to specify if you want to use the same connection information
# as MicroStrategy Identity Server.
#    true	- Use the same connection
#    false	- Do not use the same connection
`;


comment.identityManagerDBInstance = `
# Please provide a Database instance name for MicroStrategy Identity Manager.
`;

comment.identityManagerOverwriteDb = `
# For new installations use this option to indicate if any existing database instance  
# should be dropped or preserved.
#    true	- Drop the schema and create a fresh configuration.
#    false	- Preserve the schema and upgrade it if necessary.
# The default value is false.
`;


comment.servicesRegistrationMachineEnvironment = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Topology Configuration
#
# The Workstation Topology helps administrators to monitor and manage services 
# in a MicroStrategy environment.

# Indicate cluster environment.
#    SINGLE    - Choose this option if this is the only machine where the MicroStrategy 
#               services including Intelligence, Web Universal, Library, Mobile, Telemetry 
#               Server, Platform Analytics, Certificate Store, Identity, and MySQL will be 
#               installed for this environment. No other machines will have any of these 
#               services installed. 
#    MULTIPLE  - Choose this option if the MicroStrategy services listed above will 
#               be installed on multiple machines in this environment. 
#
# The default value for this setting is "SINGLE" 

`;


comment.servicesRegistrationServerHosts = `
# Enter the fully qualified domain name for one Intelligence machine below. 
# To setup a fault tolerant configuration during this installation or later, 
# review the online help. 
# https://www2.microstrategy.com/producthelp/current/InstallConfig/WebHelp/Lang_1033/Content/topology_install.htm
#
# Note: This machine must be able to communicate with other machines in this 
# environment on ports 8300 & 8301.
#
# Important: During the installation of a multiple machine environment, the value 
# above needs to be entered exactly the same for each machine in the environment.

`;


comment.registerServices = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# Registering as a service
#
# Register MicroStrategy processes as a service so that processes automatically
# start up after system startup.
# Legal values are:
#    true
#    false
# Note: Only root users may register processes as a service.

`;

comment.registerServicesUser = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
# Registering as a service
#
# Use this user to start the services (optional)

`;

comment.intelligenceVisible = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Hide Select Components dialog box
#
# Use this option to completely hide the product selection dialog during the
# execution of the MicroStrategy Installation Wizard. This option can be used 
# in combination with individual product visibility/state options to have better
# control on the products to be installed/removed. If the dialog is not visible,
# and no specific visibility/state options have been specified, default values
# will be used.
# Legal values for this option are:
# 
#    true  - Indicates that the Select Components dialog box will be visible
#    false - Indicates that the Select Components dialog box will be hidden
# 
# The default value for this setting is "true".

# SelectComponents.visible=<value>

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# MicroStrategy Product Visibility
#
# In the MicroStrategy Installation Wizard, the Select Components dialog box 
# contains check boxes to select or clear for products to be installed. You
# can specify whether you want the following products to be visible to the user. 
# Legal values are:
# 
#    true  - Indicates that the product is selected for installation
#    false - Indicates that the product is not selected for installation
# 
# The default value for Selection state settings is "true".
# 
# If a product is not visible, it will not be installed, 
# independently of the value specified for its selection state (see the
# Product Selection State section).
# 

# MicroStrategy Intelligence Universal Edition
`;

comment.reportServicesVisible = `
# MicroStrategy Report Services Universal
`;

comment.oLAPServicesVisible = `
# MicroStrategy OLAP Services Universal
`;


comment.distributionServicesVisible = `
# MicroStrategy Distribution Services
`;

comment.transactionServicesVisible = `
# MicroStrategy Transaction Services
`;

comment.webReporterVisible = `
# MicroStrategy Web Universal Reporter
`;


comment.webAnalystVisible = `
# MicroStrategy Web Universal Analyst
`;

comment.webProfessionalVisible = `
# MicroStrategy Web Universal Professional
`;

comment.portletsVisible = `
# MicroStrategy Portlets
`;

comment.gISConnectorsVisible = `
# MicroStrategy GIS Connectors
`;

comment.webServicesVisible = `
# MicroStrategy Web Services J2EE
`;

comment.mobileServerVisible = `
# MicroStrategy Mobile Server JSP
`;

comment.communityConnectorsVisible = `
# MicroStrategy Community Data Connectors
`;

comment.commandManagerVisible = `
# MicroStrategy Command Manager
`;

comment.integrityManagerVisible = `
# MicroStrategy Integrity Manager
`;

comment.systemManagerVisible = `
# MicroStrategy System Manager
`;

comment.platformAnalyticsVisible = `
# MicroStrategy Platform Analytics
`;

comment.enterpriseManagerVisible = `
# MicroStrategy Enterprise Manager
`;

comment.identityServerVisible = `
# MicroStrategy Identity Server
`;


comment.identityManagerVisible = `
# MicroStrategy Identity Manager
`;

comment.identityMobileVisible = `
# MicroStrategy Identity Mobile
`;

comment.telemetryServerVisible = `
# MicroStrategy Telemetry Server
`;

comment.libraryWebMobileVisible = `
# New in 10.9
# MicroStrategy Library Web & Mobile
`;


comment.collaborationVisible = `
# New in 10.9
# MicroStrategy Collaboration
`;

comment.certificateStoreVisible = `
# New in 11.0
# MicroStrategy Certificate Store
`;


comment.exportVisible = `
# New in 11.2
# MicroStrategy Export
`;

comment.installOnDemandStyle = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Install On Demand Options
#
## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##

# The kind of remote location. The valid values are "FileSystem", "HTTP" or "HTTPS"
`;

comment.installOnDemandSourceLocation = `
# The path to the remote location. Set this value if InstallOnDemand.style is set to "FileSystem"
`;

comment.installOnDemandUrl = `
# The URL for HTTP or HTTPS styles. Set this value if InstallOnDemand.style is set to HTTP or HTTPS 
`;


comment.installOnDemandBypassCertificateChecking = `
# Use this setting to skip the certificate checking when using HTTPS. Valid values are "true" or "false"
`;

comment.installOnDemandUser = `
# The user name for HTTP or HTTPS styles. Set this value if InstallOnDemand.style is set to HTTP or HTTPS 
# and the connection requires user name and password
`;

comment.installOnDemandPassword = `
# The password for HTTP or HTTPS styles. Set this value if InstallOnDemand.style is set to HTTP or HTTPS 
# and the connection requires user name and password 
`;

comment.guide = `

# Configuration and Deployment Guide: http://www2.microstrategy.com/producthelp/2020/InstallConfig/en-us/Content/configuration_and_deployment.htm 
`

export default comment;