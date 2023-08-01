// started this based on https://github.com/brightcove/react-player-loader and https://github.com/brightcove/player-loader#parameters
//   but it is incomplete
declare module '@brightcove/react-player-loader' {
    type CatalogSearch =  {
        q: string;
        limit?: number;
    }
    type CatalogSequence = {
        type: 'search',
        id: CatalogSearch;
    } | {
        type: 'playlist',
        id: string;
    } | {
        type: 'video',
        id: string;
    };
    type SuccessObject = {
        type: 'in-page' | 'iframe';
        ref: any;
    }
    // this is key - `import React from 'react'` at the top of the file won't work - see https://stackoverflow.com/a/51114250
    const ReactPlayerLoader: import('react').ComponentType<{
        accountId: string;
        adConfigId?: string;
        applicationId?: string;
        catalogSearch?: string | CatalogSearch;
        catalogSequence?: CatalogSequence | CatalogSequence[];
        attrs?: object;
        baseUrl?: string;
        manualReloadFromPropChanges?: boolean;
        onSuccess?: (obj: SuccessObject) => void;
        onFailure?: () => void;
    }>;
    export default ReactPlayerLoader;
}