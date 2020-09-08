import {container} from 'tsyringe';
import {
  KeyChainAuthenticationDataSource,
  ApiAuthenticationDataSource,
  CombineAuthenticationRepository,
} from '@data';
import {SignInUseCase} from '@domain';
import {BearerAuthorizationRxAxiosProvider} from '@core';

export function registerDatDependencies() {
  container.register('ApiProvider', {
    useValue: new BearerAuthorizationRxAxiosProvider({baseURL: ''}),
  });
  container.register('LocalAuthenticationDataSource', {
    useClass: KeyChainAuthenticationDataSource,
  });

  container.register('RemoteAuthenticationDataSource', {
    useClass: ApiAuthenticationDataSource,
  });

  container.register('AuthenticationRepository', {
    useClass: CombineAuthenticationRepository,
  });

  container.register('SignInUseCase', {
    useClass: SignInUseCase,
  });
}