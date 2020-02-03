
const comment = {};

comment.expressMode = `
######################################
## MicroStrategy 11.2 Response File ##
######################################
#
# This file contains a subset of entries required for Express Mode, which will install and configure the full platform on one machine.
# For more information on Express Mode please refer to the section on "Performing a MicroStrategy Express Installation" in the Installation and Configuration guide available at http://www2.microstrategy.com/producthelp/manuals/en/InstallationConfig.pdf.
# Additional entries are not included in this file and may be optionally included for greater flexibility.  For a full list, please refer to the "Installing and configuring with a response.ini file" section in the Installation and Configuration guide.
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
# Silent Install Usage: #PathToSetupExe --responseFile="#PathToResponseIni#" -s -f1#PathToSetupIss# -f2#PathToLogFile#
#
# Example: C:\\Setup.exe --responseFile="C:\\response_express.ini" -s -f1C:\\Setup.iss -f2C:\\Setup.log
#
# The above example assumes the following:
#
# Setup.exe is located at: C:\\Setup.exe
# MicroStrategy Response File is located at: C:\\response_express.ini
# Installer Setup.iss is located at: C:\\Setup.iss
# Output Log file should be written to: C\\Setup.log
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

# Path and File Name for the Installation Log file.
# If no value is specified, the default location will be used: C:\\Program Files (x86)\\Common Files\\MicroStrategy\\install.log
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

comment.hideWelcomeDialog = `

[Welcome]
`;

comment.hideUserRegistrationDialog = `

## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
#
# Customer Information
#
# Please specify your first name, last name, email address, the name of the company for which you work and the license key.
#
# For Express Installation, this information is used to create the initial MicroStrategy Identity Network and user badge.

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

comment.hideOpenSourceSoftwareDialogDialog = `

# New in 10.8
[OpenSourceSoftwareDialog]
`;

comment.hideSummaryDialog = `

[Summary]
`;

comment.hideFinishDialog = `

[Finish]
`;

export default comment;