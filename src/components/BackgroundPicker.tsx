import React, { useRef, useState } from "react";
import { X, Upload, Palette, Image } from "lucide-react";
import dataBackground from "../lib/data-background";

interface BackgroundPickerProps {
	isOpen: boolean;
	onClose: () => void;
	onSelectImage: (img: HTMLImageElement) => void;
	onSelectColor: (color: string) => void;
	currentColor: string;
}

type TabType = "presets" | "color" | "upload";

const BackgroundPicker: React.FC<BackgroundPickerProps> = ({
	isOpen,
	onClose,
	onSelectImage,
	onSelectColor,
	currentColor,
}) => {
	const [activeTab, setActiveTab] = useState<TabType>("presets");
	const [selectedColor, setSelectedColor] = useState(currentColor);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	if (!isOpen) return null;

	const handlePresetClick = (imagePath: string) => {
		const img = new window.Image();
		img.crossOrigin = "anonymous";
		img.onload = () => {
			onSelectImage(img);
			onClose();
		};
		img.src = imagePath;
	};

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedColor(e.target.value);
	};

	const handleColorApply = () => {
		onSelectColor(selectedColor);
		onClose();
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const img = new window.Image();
		img.onload = () => {
			onSelectImage(img);
			onClose();
		};
		img.src = URL.createObjectURL(file);
	};

	// Preset colors for quick selection
	const presetColors = [
		"#ffffff", "#000000", "#f8fafc", "#f1f5f9", "#e2e8f0",
		"#fecaca", "#fed7aa", "#fef08a", "#bbf7d0", "#a5f3fc",
		"#bfdbfe", "#ddd6fe", "#fbcfe8", "#fca5a5", "#fdba74",
		"#facc15", "#4ade80", "#22d3d8", "#60a5fa", "#a78bfa",
		"#f472b6", "#ef4444", "#f97316", "#eab308", "#22c55e",
	];

	return (
		<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
			<div className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] overflow-hidden shadow-2xl">
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b">
					<h2 className="text-lg font-semibold text-gray-800">Pilih Background</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-gray-100 rounded-full transition-colors"
					>
						<X size={20} />
					</button>
				</div>

				{/* Tabs */}
				<div className="flex border-b">
					<button
						onClick={() => setActiveTab("presets")}
						className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${activeTab === "presets"
							? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] bg-[var(--color-primary)]/10"
							: "text-gray-600 hover:bg-gray-50"
							}`}
					>
						<Image size={18} />
						<span className="hidden sm:inline">Preset</span>
					</button>
					<button
						onClick={() => setActiveTab("color")}
						className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${activeTab === "color"
							? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] bg-[var(--color-primary)]/10"
							: "text-gray-600 hover:bg-gray-50"
							}`}
					>
						<Palette size={18} />
						<span className="hidden sm:inline">Warna</span>
					</button>
					<button
						onClick={() => setActiveTab("upload")}
						className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors ${activeTab === "upload"
							? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] bg-[var(--color-primary)]/10"
							: "text-gray-600 hover:bg-gray-50"
							}`}
					>
						<Upload size={18} />
						<span className="hidden sm:inline">Upload</span>
					</button>
				</div>

				{/* Content */}
				<div className="p-4 overflow-y-auto max-h-[50vh]">
					{/* Presets Tab */}
					{activeTab === "presets" && (
						<div className="grid grid-cols-4 gap-3">
							{dataBackground.map((bg) => (
								<button
									key={bg.id}
									onClick={() => handlePresetClick(bg.image)}
									className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-[var(--color-primary)] transition-all hover:scale-105 shadow-sm"
								>
									<img
										src={bg.image}
										alt={bg.name}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>
					)}

					{/* Color Tab */}
					{activeTab === "color" && (
						<div className="space-y-4">
							{/* Color Picker */}
							<div className="flex items-center gap-4">
								<input
									type="color"
									value={selectedColor}
									onChange={handleColorChange}
									className="w-16 h-16 rounded-lg cursor-pointer border-2 border-gray-200"
								/>
								<div className="flex-1">
									<label className="text-sm text-gray-600">Warna Terpilih</label>
									<input
										type="text"
										value={selectedColor}
										onChange={(e) => setSelectedColor(e.target.value)}
										className="w-full mt-1 px-3 py-2 border rounded-lg text-sm font-mono focus:border-[var(--color-primary)] outline-none"
									/>
								</div>
							</div>

							{/* Preset Colors */}
							<div>
								<label className="text-sm text-gray-600 mb-2 block">Warna Cepat</label>
								<div className="grid grid-cols-5 gap-2">
									{presetColors.map((color) => (
										<button
											key={color}
											onClick={() => setSelectedColor(color)}
											className={`w-full aspect-square rounded-lg border-2 transition-all ${selectedColor === color
												? "border-[var(--color-primary)] scale-110"
												: "border-gray-200 hover:border-gray-400"
												}`}
											style={{ backgroundColor: color }}
										/>
									))}
								</div>
							</div>

							{/* Apply Button */}
							<button
								onClick={handleColorApply}
								className="w-full py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:brightness-90 transition-all"
							>
								Terapkan Warna
							</button>
						</div>
					)}

					{/* Upload Tab */}
					{activeTab === "upload" && (
						<div className="text-center py-8">
							<input
								type="file"
								ref={fileInputRef}
								accept="image/*"
								onChange={handleFileUpload}
								className="hidden"
							/>
							<div
								onClick={() => fileInputRef.current?.click()}
								className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all cursor-pointer"
							>
								<Upload size={48} className="mx-auto text-gray-400 mb-4" />
								<p className="text-gray-600 font-medium">Klik untuk upload gambar</p>
								<p className="text-gray-400 text-sm mt-2">JPG, PNG, WEBP (max 10MB)</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BackgroundPicker;