import { QueryClient, UseMutationOptions, UseQueryOptions } from 'react-query';

import Awaited from 'type-fest';
import { AxiosError } from 'axios';
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			useErrorBoundary: true,
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});
export type QueryConfig<FetcherFnType extends (...args: any) => any> =
	UseQueryOptions<Awaited<ReturnType<FetcherFnType>>>;
export type MutationConfig<FetcherFnType extends (...args: any) => any> =
	UseMutationOptions<
		Awaited<ReturnType<FetcherFnType>>,
		AxiosError,
		Parameters<FetcherFnType>[0]
	>;
