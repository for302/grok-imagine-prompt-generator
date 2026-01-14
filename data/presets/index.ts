import { videoPresets } from './videoPresets';
import { imagePresets } from './imagePresets';
import { Preset } from '@/types';

export const allPresets: Preset[] = [...videoPresets, ...imagePresets];

export function getPresetsByMode(mode: 'image' | 'video'): Preset[] {
  return allPresets.filter(preset => preset.mode === mode);
}

export function getPresetById(id: string): Preset | undefined {
  return allPresets.find(preset => preset.id === id);
}

export { videoPresets, imagePresets };
