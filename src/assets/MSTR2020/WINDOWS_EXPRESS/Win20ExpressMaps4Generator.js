import comment from './Win20ExpressGeneratorComment';


/**
 * Mapping prefix text to state
 * The key is prefix text for each variable in Option.txt file
 * The value is the state name
 * @type {Map}
 */

 export const winExpressState2PrefixMap = new Map([
            ['expressMode', 'ExpressMode='],
            ['hideAllDialogs', 'HideAllDialogs='],
            ['forceReboot', 'ForceReboot='],
            ['checkIIS', 'CheckIIS='],
            ['runConfigWizard', 'RunConfigWizard='],
            ['stopAllServices', 'StopAllServices='],
            ['stopIIS', 'StopIIS='],
            ['showWelcomeScreen', 'ShowWelcomeScreen='],

            ['logFile', 'LogFile='],
            ['hideSuiteTargetDialog ', 'HideDialog='],
            ['targetDirectory', 'TargetDirectory='],

            ['commonFiles', 'CommonFiles='],

            ['hideWelcomeDialog', 'HideDialog='],
            ['removeAll', 'RemoveAll='],

            ['hideUserRegistrationDialog', 'HideDialog='],
            ['userFirstName', 'UserFirstName='],
            ['userLastName', 'UserLastName='],
            ['userEmail', 'UserEmail='],
            ['companyName', 'CompanyName='],
            ['licenseKey', 'LicenseKey='],

            ['hideLicenseDetailDialog', 'HideDialog='],

            ['hideSetupExpressDialog', 'HideDialog='],

            ['hideOpenSourceSoftwareDialogDialog', 'HideDialog='],

            ['hideSummaryDialog', 'HideDialog='],

            ['hideFinishDialog', 'HideDialog=']
        ]);


/**
 * Mapping the comments that should appear before each prefix text
 * The key is prefix text for each variable in Response.ini file
 * The value is the comments content
 * @type {Map}
 */
export const winExpressState2CommentMap = new Map([
           ['expressMode', comment.expressMode],
           ['hideAllDialogs', ''],
           ['forceReboot', comment.forceReboot],
           ['checkIIS', ''],
           ['runConfigWizard', ''],
           ['stopAllServices', ''],
           ['stopIIS', ''],
           ['showWelcomeScreen', ''],

           ['logFile', comment.logFile],
           ['hideSuiteTargetDialog ', comment.hideSuiteTargetDialog],
           ['targetDirectory', ''],

           ['commonFiles', comment.commonFiles],

           ['hideWelcomeDialog', comment.hideWelcomeDialog],
           ['removeAll', ''],

           ['hideUserRegistrationDialog', comment.hideUserRegistrationDialog],
           ['userFirstName', comment.userFirstName],
           ['userLastName', comment.userLastName],
           ['userEmail', comment.userEmail],
           ['companyName', comment.companyName],
           ['licenseKey', comment.licenseKey],

           ['hideLicenseDetailDialog', comment.hideLicenseDetailDialog],

           ['hideSetupExpressDialog', comment.hideSetupExpressDialog],

           [
               'hideOpenSourceSoftwareDialogDialog',
               comment.hideOpenSourceSoftwareDialogDialog
           ],

           ['hideSummaryDialog', comment.hideSummaryDialog],

           ['hideFinishDialog', comment.hideFinishDialog]
       ]);