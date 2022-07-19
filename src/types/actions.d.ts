import {SavedMap} from './schemas';

export type ProtoDataset = {
  info: {
    id?: string;
    label?: string;
    format?: string;
    color?: RGBColor;
  };
  data: {
    fields: {
      name: string;
      type?: string;
      format?: string;
      displayName?: string;
      id?: string;
    }[];
    rows: any[][];
  };

  // table-injected metadata
  metadata?: any;
  supportedFilterTypes?: string[];
};

/** EXPORT_FILE_TO_CLOUD */
export type MapData = {
  map: SavedMap;
  thumbnail: Blob | null;
};
export type ExportFileOptions = {
  isPublic?: boolean;
  overwrite?: boolean;
};
export type OnErrorCallBack = (error: Error) => any;
export type OnSuccessCallBack = (p: {
  response: any;
  provider: Provider;
  options: ExportFileOptions;
}) => any;

export type ExportFileToCloudPayload = {
  mapData: MapData;
  provider: Provider;
  options: ExportFileOptions;
  onSuccess?: OnSuccessCallBack;
  onError?: OnErrorCallBack;
  closeModal?: boolean;
};