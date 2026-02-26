
import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { getInstitutionCoordinates } from './coordinates';

interface InstitutionMapProps {
  institutions: string[];
  className?: string;
}

const InstitutionMap: React.FC<InstitutionMapProps> = ({ institutions, className = '' }) => {
  const [mapDataLoaded, setMapDataLoaded] = useState(false);
  const chartRef = useRef<ReactECharts>(null);

  useEffect(() => {
    const loadMapData = async () => {
      try {
        const response = await fetch('/maps/china.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const geoJson = await response.json();
        echarts.registerMap('china', geoJson);
        setMapDataLoaded(true);
      } catch (error) {
        console.error('Failed to load map data:', error);
      }
    };

    loadMapData();
  }, []);

  const data = getInstitutionCoordinates(institutions);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return `<div class="font-sans text-sm font-medium text-slate-800 p-2">
                  <div class="text-teal-600 mb-1 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-teal-500"></span>
                    ${params.name}
                  </div>
                  <div class="text-xs text-slate-500">Collaborating Center</div>
                </div>`;
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e2e8f0',
      borderWidth: 1,
      padding: 0,
      textStyle: {
        color: '#1e293b'
      },
      extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 0.5rem;'
    },
    geo: {
      map: 'china',
      roam: false, // Disable zooming
      zoom: 1.22, // Adjusted to fit better without overflow
      center: [105, 36], // Center on China
      top: '10%', // Increased padding to prevent overflow
      bottom: '10%', // Increased padding to prevent overflow
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#f1f5f9', // slate-100
          borderColor: '#cbd5e1', // slate-300
          borderWidth: 1
        },
        emphasis: {
          areaColor: '#e2e8f0' // slate-200
        }
      }
    },
    series: [
      {
        name: 'Institutions',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: data,
        symbolSize: 12,
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
          scale: 3
        },
        hoverAnimation: true,
        label: {
          formatter: '{b}',
          position: 'right',
          show: false // Hide labels by default to avoid clutter
        },
        itemStyle: {
          color: '#0d9488', // teal-600
          shadowBlur: 10,
          shadowColor: '#333'
        },
        zlevel: 1
      }
    ]
  };

  if (!mapDataLoaded) {
    return (
      <div className={`flex items-center justify-center h-[500px] bg-slate-50 rounded-xl ${className}`}>
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-slate-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm ${className}`}>
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{ height: '100%', width: '100%', minHeight: '400px' }}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};

export default InstitutionMap;
