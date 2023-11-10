interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager', 'Operations Staff'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user data',
    'View company data',
    'Update personal user data',
    'View personal user data',
  ],
  ownerAbilities: ['Manage user information', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0e32fd66-02b2-4438-911b-bcfd1488c892',
};
