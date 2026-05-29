/// <reference lib="webworker" />
import { computeBranchGridLayout, type BranchGridLayoutInput } from './branchGridLayoutModel';
import { serializeBranchGridLayoutModel, type SerializedBranchGridLayoutModel } from './layoutSnapshot';

export type WorkerBranchGridLayoutInput = Omit<
  BranchGridLayoutInput,
  'manuallyOpenedClumps' | 'manuallyClosedClumps'
> & {
  manuallyOpenedClumps: string[];
  manuallyClosedClumps: string[];
};

export type BranchGridLayoutWorkerRequest = {
  jobId: number;
  input: WorkerBranchGridLayoutInput;
};

export type BranchGridLayoutWorkerSuccess = {
  jobId: number;
  ok: true;
  serialized: SerializedBranchGridLayoutModel;
};

export type BranchGridLayoutWorkerFailure = {
  jobId: number;
  ok: false;
  error: string;
};

export type BranchGridLayoutWorkerResponse = BranchGridLayoutWorkerSuccess | BranchGridLayoutWorkerFailure;

self.onmessage = (event: MessageEvent<BranchGridLayoutWorkerRequest>) => {
  const { jobId, input } = event.data;
  try {
    const model = computeBranchGridLayout({
      ...input,
      manuallyOpenedClumps: new Set(input.manuallyOpenedClumps),
      manuallyClosedClumps: new Set(input.manuallyClosedClumps),
      gridSearchQuery: '',
      isDebugOpen: false,
    });
    const response: BranchGridLayoutWorkerSuccess = {
      jobId,
      ok: true,
      serialized: serializeBranchGridLayoutModel(model),
    };
    self.postMessage(response);
  } catch (error) {
    const response: BranchGridLayoutWorkerFailure = {
      jobId,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
    self.postMessage(response);
  }
};
