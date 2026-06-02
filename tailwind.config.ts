
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// LBL brand palette
				"lbl-eggplant":  "#421f52",   // primary brand purple
				"lbl-ink":       "#2a1748",   // deep product surface / dark sections
				"lbl-orange":    "#fc8817",   // flame orange — accent
				"lbl-magenta":   "#ec4795",   // gradient midpoint (NEW — relaunch)
				"lbl-lilac":     "#c4b1d9",   // supporting light purple
				"lbl-paper":     "#f7f7f7",   // canonical light background
				"lbl-green":     "#22c55e",   // success / "your team" checks only
				// Eggplant scale
				"eggplant": {
					"50":  "#f4eff7",
					"100": "#e3d6ec",
					"200": "#c4b1d9",
					"300": "#9d82b8",
					"400": "#74548f",
					"500": "#5a3672",
					"600": "#421f52",
					"700": "#341641",
					"800": "#251030",
					"900": "#170a1f",
					"night": "#2a1748",
				},
				// Orange scale
				"lbl-orange-scale": {
					"50":  "#fff4e8",
					"100": "#ffe1c2",
					"200": "#ffc485",
					"300": "#ffa84a",
					"400": "#fc8817",
					"500": "#e2700a",
					"600": "#b75a06",
					"700": "#8a4304",
					"800": "#5e2e02",
				},
				// Magenta scale
				"lbl-magenta-scale": {
					"50":  "#fdecf4",
					"100": "#fbd2e6",
					"200": "#f7a3c9",
					"300": "#f274ad",
					"400": "#ec4795",
					"500": "#d62d7e",
					"600": "#b21f63",
					"700": "#861449",
				},
			},
			fontFamily: {
				sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
				display: ['Inter', 'sans-serif'],
				serif:   ['Fraunces', 'Georgia', 'serif'],
				mono:    ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
			},
			borderRadius: {
				xs:   '4px',
				sm:   '8px',
				md:   '12px',
				lg:   '16px',
				xl:   '24px',
				'2xl':'32px',
				pill: '999px',
				// keep shadcn tokens working
				DEFAULT: 'var(--radius)',
			},
			boxShadow: {
				xs:          '0 1px 2px rgba(23,10,31,0.06)',
				sm:          '0 2px 6px rgba(23,10,31,0.08)',
				md:          '0 8px 24px rgba(23,10,31,0.10)',
				lg:          '0 20px 50px rgba(23,10,31,0.16)',
				'glow-orange':'0 8px 30px rgba(252,136,23,0.35)',
			},
			backgroundImage: {
				'grad-brand':       'linear-gradient(96deg, #421f52 0%, #ec4795 50%, #fc8817 100%)',
				'grad-brand-warm':  'linear-gradient(96deg, #ec4795 0%, #fc8817 100%)',
				'grad-cta':         'linear-gradient(90deg, #2a1748 0%, #fc8817 100%)',
				'grad-hero-soft':   'linear-gradient(120deg, #f1ebf7 0%, #faf0ec 55%, #ffffff 100%)',
				'grad-divider':     'linear-gradient(90deg, #ec4795 0%, #fc8817 100%)',
				'grad-eggplant':    'linear-gradient(180deg, #5a3672 0%, #421f52 100%)',
				'grad-purple-pink': 'linear-gradient(135deg, #f29eb8 0%, #b86aa8 60%, #6b3a82 100%)',
				'grad-blue-purple': 'linear-gradient(110deg, #2a4d8c 0%, #6b4ca4 50%, #b88ac4 100%)',
				'grad-orange-warm': 'linear-gradient(135deg, #fc8817 0%, #b75a06 100%)',
			},
			transitionTimingFunction: {
				'lbl-standard': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
				'lbl-out':      'cubic-bezier(0.16, 1, 0.3, 1)',
			},
			transitionDuration: {
				fast:  '120ms',
				base:  '200ms',
				slow:  '320ms',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'brain-glow': {
					'0%, 100%': {
					filter: 'drop-shadow(0 0 12px rgba(126, 34, 206, 0.4)) brightness(0.95)',
				},
				'50%': {
					filter: 'drop-shadow(0 0 35px rgba(126, 34, 206, 0.7)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.4)) brightness(1.1)',
				}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'brain-glow': 'brain-glow 5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
