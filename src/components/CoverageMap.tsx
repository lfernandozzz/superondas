import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import { cities } from '../data/site'

export function CoverageMap() {
  return <div className="coverage-map-wrap"><MapContainer className="leaflet-map" center={[-3.6, -44.5]} zoom={9} scrollWheelZoom={false} aria-label="Mapa de cidades atendidas pela SuperOndas"><TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{cities.map((city) => <CircleMarker key={city.slug} center={city.coordinates} radius={8} pathOptions={{ color: '#FFB627', fillColor: '#1E7FA8', fillOpacity: 0.9, weight: 3 }}><Popup><strong>{city.name}</strong><br />Área atendida — confirme seu endereço pelo WhatsApp.</Popup></CircleMarker>)}</MapContainer><div className="map-caption">Áreas indicativas. A confirmação é feita por endereço.</div></div>
}
