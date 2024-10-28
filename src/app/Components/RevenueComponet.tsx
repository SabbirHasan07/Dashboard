'use client'

import React, { useEffect, useRef } from 'react';
import { Chart, registerables, Tick, Scale } from 'chart.js';
import { ThreeDot } from '../icons/icons';

Chart.register(...registerables);

const RevenueComponent: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [
                            '00hr', '02hr', '04hr', '06hr', '08hr', '10hr',
                            '12hr', '14hr', '16hr', '18hr', '20hr', '22hr', '24hr'
                        ], // X-axis with 2-hour intervals
                        datasets: [
                            {
                                label: 'Revenue (AED)',
                                data: [0, 100, 200, 200, 400, 500, 0, 100, 300, 400, 0, 150, 250],
                                borderColor: '#A01E5D', // Line color
                                backgroundColor: 'rgba(160, 30, 93, 0.2)', // Fill color with transparency
                                fill: true, // Fill area under the line
                                tension: 0.3, // Smoothness of the line
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Revenue Over 24 Hours',
                            },
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time (Hours)',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Revenue (AED)',
                                },
                                beginAtZero: true,
                                ticks: {
                                    stepSize: 50,
                                    callback: (tickValue: string | number): string => {
                                        const value = Number(tickValue); // Ensure type safety
                                        return `AED ${value}`;
                                    },
                                },
                                suggestedMin: 0,
                                suggestedMax: 500,
                                afterBuildTicks: (axis: Scale) => {
                                    axis.ticks = [
                                        { value: 0 },
                                        { value: 100 },
                                        { value: 200 },
                                        { value: 300 },
                                        { value: 400 },
                                        { value: 500 },
                                    ] as Tick[];
                                },
                            },
                        },
                    },
                });
            }
        }
    }, []);

    return (
        <div className='h-[390px]  border rounded-lg shadow mt-7'>
            <div className="flex justify-between pt-4 px-4  items-center  ">
                <p className='font-bold'>Revenue 600 AED</p>
                <p><ThreeDot/></p>
            </div>
            <div className=" p-4 flex items-center ">
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default RevenueComponent;
