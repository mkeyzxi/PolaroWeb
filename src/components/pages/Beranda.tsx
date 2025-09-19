import DotGrid from '../DotGrid';

const Beranda = () => {
	return (
		<div style={{
			width: '100%',
			height: '600px',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Background */}
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 0, // background paling belakang,
				
			}}>
				<DotGrid
					dotSize={10}
					gap={15}
					baseColor="#5227FF"
					activeColor="#5227FF"
					proximity={120}
					shockRadius={250}
					shockStrength={5}
					resistance={750}
					returnDuration={1.5}
				/>
			</div>

			{/* Konten di atas background */}
			<div style={{
				position: 'relative',
				zIndex: 1,
				color: '#000', // warna teks agar terlihat
				padding: '20px'
			}}>
				<h1>Ini Konten di Atas Background</h1>
				<p>dasds</p>
			</div>
		</div>
	);
}

export default Beranda;
