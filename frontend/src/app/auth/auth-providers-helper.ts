// Import libraries related to OAuth-library
import { configureTnsOAuth } from 'nativescript-oauth2';
import { 
  TnsOaProvider,
  TnsOaProviderOptionsFacebook,
  TnsOaProviderFacebook,
  TnsOaProviderOptionsGoogle,
  TnsOaProviderGoogle
} from 'nativescript-oauth2/providers';


// Google's credentials for social-logging
export function configureOAuthProviderGoogle(): TnsOaProvider {
  const googleProviderOptions: TnsOaProviderOptionsGoogle = {
    openIdSupport: 'oid-full',
    clientId:
      '770380225594-fpki91pv3i3gsnd5t6f3270ka4hpncd4.apps.googleusercontent.com',
    redirectUri:
      'com.googleusercontent.apps.770380225594-fpki91pv3i3gsnd5t6f3270ka4hpncd4:/auth',
    urlScheme:
      'com.googleusercontent.apps.770380225594-fpki91pv3i3gsnd5t6f3270ka4hpncd4',
    scopes: ['email']
  };
  const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);
  return googleProvider;
}

// Facebook's credentials for social-logging
export function configureOAuthProviderFacebook(): TnsOaProvider {
  const facebookProviderOptions: TnsOaProviderOptionsFacebook = {
    openIdSupport: 'oid-none',
    clientId: '391045678343483',
    clientSecret: '18d59f80dc9d188550d69717a16ac365',
    redirectUri: 'https://www.facebook.com/connect/login_success.html',
    scopes: ['email']
  };
  const facebookProvider = new TnsOaProviderFacebook(facebookProviderOptions);
  return facebookProvider;
}

// Export all social-platforms for other components
export function configureOAuthProviders() {
  const googleProvider = configureOAuthProviderGoogle();
  const facebookProvider = configureOAuthProviderFacebook();

  configureTnsOAuth([googleProvider, facebookProvider]);
}