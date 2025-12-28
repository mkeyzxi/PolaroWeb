import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type LayoutType = '3strips' | '4strips' | 'square' | 'wide' | 'snapshoot6' | 'snapshoot8' | 'mini' | '2r' | '3r' | '4r';

export interface MediaDeviceInfoExtended extends MediaDeviceInfo {
	deviceId: string;
	label: string;
}

// 🔥 fungsi untuk dapatkan config layout dari URL param
export function getLayoutFromType(type: string) {
	// cek lowercase tanpa spasi
	const t = type.toLowerCase().replace(/\s/g, '');

	if (t.includes('snapshoot6')) {
		return {
			layout: 'snapshoot6' as LayoutType,
			maxPhotos: 6,
			cols: 2,
			width: 800,
			height: 1200,
		};
	}
	if (t.includes('snapshoot8')) {
		return {
			layout: 'snapshoot8' as LayoutType,
			maxPhotos: 8,
			cols: 2,
			width: 800,
			height: 1600,
		};
	}
	if (t.includes('mini')) {
		return {
			layout: 'mini' as LayoutType,
			maxPhotos: 1,
			cols: 1,
			width: 700,
			height: 900,
		};
	}
	if (t.includes('wide')) {
		return {
			layout: 'wide' as LayoutType,
			maxPhotos: 1,
			cols: 1,
			width: 1300,
			height: 800,
		};
	}
	if (t.includes('3strips')) {
		return {
			layout: '3 Strips' as LayoutType,
			maxPhotos: 3,
			cols: 1,
			width: 500,
			height: 1200,
		};
	}
	if (t.includes('4strips')) {
		return {
			layout: '4 Strips' as LayoutType,
			maxPhotos: 4,
			cols: 1,
			width: 500,
			height: 1500,
		};
	}
	if (t.includes('2r')) {
		return {
			layout: '2R' as LayoutType,
			maxPhotos: 1,
			cols: 1,
			width: 750, // dikurangi dari 800
			height: Math.round(750 * 1.5), // 750 * aspect 1.5
		};
	}
	if (t.includes('3r')) {
		return {
			layout: '3R' as LayoutType,
			maxPhotos: 1,
			cols: 1,
			width: 780, // dikurangi dari 800
			height: Math.round(780 * 1.427), // 780 * aspect 1.427 ≈ 1112
		};
	}
	if (t.includes('4r')) {
		return {
			layout: '4R' as LayoutType,
			maxPhotos: 1,
			cols: 1,
			width: 770, // dikurangi dari 800
			height: Math.round(770 * 1.49), // 770 * aspect 1.49 ≈ 1147
		};
	}

	// fallback
	return {
		layout: 'square' as LayoutType,
		maxPhotos: 1,
		cols: 1,
		width: 800,
		height: 800,
	};
}
