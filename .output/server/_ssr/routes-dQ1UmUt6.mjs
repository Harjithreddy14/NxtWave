import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Check, i as Copy, n as Plus, o as ArrowUpRight, r as Minus, s as ArrowDown, t as RotateCcw } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-dQ1UmUt6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
/**
* Scrollytelling engine:
* - Adds `.is-visible` to every `.reveal` element as it enters the viewport.
* - Drives the fixed #scroll-progress bar.
* - Feeds cursor position into .stat-card glow via --mx/--my.
*/
function useScrolly() {
	(0, import_react.useEffect)(() => {
		const els = Array.from(document.querySelectorAll(".reveal"));
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.classList.add("is-visible");
				io.unobserve(e.target);
			}
		}, {
			threshold: .18,
			rootMargin: "0px 0px -8% 0px"
		});
		els.forEach((el) => io.observe(el));
		const bar = document.getElementById("scroll-progress");
		const onScroll = () => {
			if (!bar) return;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		const onMove = (ev) => {
			const card = ev.target.closest?.(".stat-card");
			if (!card) return;
			const r = card.getBoundingClientRect();
			card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
			card.style.setProperty("--my", `${ev.clientY - r.top}px`);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			io.disconnect();
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
}
var campus_growth_default = "/assets/campus-growth-CwsSgyrE.jpg";
var nxtwave_logo_default = "/assets/nxtwave-logo-BEVUXU-c.png";
var channels = [
	{
		id: "01",
		name: "The trusted forward",
		source: "WhatsApp communities",
		target: "300",
		detail: "Ten student ambassadors share a 45-word message and a 15-second project demo into relevant class, placement and coding groups. One person-to-person recommendation beats another paid impression.",
		action: "10 ambassadors × 8–10 relevant groups",
		tag: "FIRST MOVE"
	},
	{
		id: "02",
		name: "Borrowed credibility",
		source: "Clubs & placement cells",
		target: "150",
		detail: "Pitch 30 coding clubs and placement coordinators with a short, co-branded invitation. An official college broadcast makes the opportunity feel worth opening.",
		action: "30 targeted pitches, not a mass email",
		tag: "TRUST LAYER"
	},
	{
		id: "03",
		name: "The second wave",
		source: "Student referrals",
		target: "50",
		detail: "Give every registrant an easy-to-forward invite. Keep the ask simple: bring a friend who also wants a first AI project. Track attributed signups, not just shares.",
		action: "One message · one link · one friend",
		tag: "MULTIPLIER"
	}
];
var messageVariants = [
	{
		label: "The project",
		text: "Still need an AI project for your resume? NxtWave is running a free 60-minute workshop where you'll build your first one. No prior AI experience needed. I'm joining — want the link? [WORKSHOP LINK]"
	},
	{
		label: "The interview",
		text: "If an interviewer asked to see your AI project tomorrow, what would you show? Build your first one in NxtWave's free 60-minute workshop. I'm signing up too. Here's the link: [WORKSHOP LINK]"
	},
	{
		label: "The friend",
		text: "Found a free NxtWave workshop to build your first AI project in just 60 minutes. Thought of you because we're both trying to add something real to our resumes. Join me? [WORKSHOP LINK]"
	}
];
function SectionLabel({ number, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-label",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "section-label-index",
			children: number
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function Index() {
	useScrolly();
	const [selectedMessage, setSelectedMessage] = (0, import_react.useState)(0);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [ambassadorSpend, setAmbassadorSpend] = (0, import_react.useState)(800);
	const videoSpend = 1400 - ambassadorSpend;
	const ambassadorCount = Math.floor(ambassadorSpend / 80);
	const remaining = 2e3 - ambassadorSpend - videoSpend - 400;
	async function copyMessage() {
		try {
			await navigator.clipboard.writeText(messageVariants[selectedMessage]?.text ?? "");
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2200);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "scroll-progress",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "site-nav",
			"aria-label": "Page navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "nav-mark",
					"aria-label": "Back to top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: nxtwave_logo_default,
						alt: "NxtWave Logo",
						className: "h-8 w-auto object-contain bg-white p-1 rounded-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "THE GROWTH FILE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nav-center hidden md:inline",
					children: "NXTWAVE / GROWTH INTERN CHALLENGE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#playbook",
					className: "nav-link",
					children: ["EXPLORE THE PLAN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			id: "top",
			className: "hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "hero-image",
					src: campus_growth_default,
					width: 1600,
					height: 1e3,
					alt: "Engineering students sharing something on a phone in a campus corridor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-topline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FIELD NOTES / 001" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GROWTH CHALLENGE · ROUND 1" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "signal-dot" }), " THE 500-STUDENT EXPERIMENT"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "500" }),
							" students.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "7" }),
							" days.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "₹2,000." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-sub",
							children: "One free workshop. One small budget. A plan to turn student trust into momentum."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "hero-scroll",
							href: "#brief",
							children: ["OPEN THE FIELD NOTES ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 17 })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-side",
					children: "A PROPOSED PLAN — NOT REPORTED RESULTS"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker-track",
				children: Array.from({ length: 4 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"BUILD YOUR FIRST AI PROJECT IN 60 MINUTES ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✳" }),
					" 500 STUDENTS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✳" }),
					" 7 DAYS ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✳" }),
					" ₹2,000 ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "✳" }),
					" "
				] }, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "brief",
			className: "brief-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						number: "00 / THE BRIEF",
						children: "WHAT WE'RE SOLVING"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "brief-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-heading reveal",
							children: [
								"Don't buy",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"attention.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Earn a forward." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "brief-aside reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"NxtWave wants ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "500 final-year engineering students" }),
									" to register for a free online workshop: “Build Your First AI Project in 60 Minutes.” The window is seven days. The budget is ₹2,000."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My bet: the message travels further when it comes from someone a student already knows." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hypothesis",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE HYPOTHESIS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Trust is the distribution channel." })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "metric-strip reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REGISTRATION TARGET" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "07" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DAYS TO ACT" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "₹2K" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TOTAL BUDGET" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "₹4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TARGET COST / REGISTRATION" })] })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "student",
			className: "student-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					number: "01 / THE HUMAN",
					children: "START WITH A PERSON"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "student-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "overline",
								children: "NOT EVERY STUDENT. THIS STUDENT."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "student-quote",
								children: [
									"“I don't need another course. I need ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "one project" }),
									" I can show by Monday.”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "quote-caption",
								children: "A working student insight, not a research quote."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "student-notes reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WHO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Final-year CSE, IT and ECE students at tier-2/3 colleges, starting with Hyderabad, Bengaluru, Chennai and Vijayawada." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE PRESSURE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Placement season is approaching. Their resumes list the same skills; they want proof they can actually build something." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE TRIGGER" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Free, doable in 60 minutes, and immediately useful in an interview. The promise is a finished first project — not more theory." })] })
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "playbook",
			className: "playbook-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						number: "02 / THE PLAYBOOK",
						children: "A PLAN THAT FITS THE CONSTRAINT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-intro reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-heading",
							children: [
								"Three moves.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Not twenty." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prioritize by likely cost per verified registration. Run the human channels first; use paid reach only to support the message that works." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "channel-list",
						children: channels.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "channel-row reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "channel-index",
									children: channel.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "channel-body",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "overline",
											children: [
												channel.tag,
												" / ",
												channel.source
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: channel.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: channel.detail }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: channel.action })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "channel-target",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: channel.target }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"PLANNED",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"REGISTRATIONS"
									] })]
								})
							]
						}, channel.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "funnel-note reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE SANITY CHECK" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"25,000 relevant impressions ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
								" ~3,500 visits ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
								" ~500 registrations"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Planning assumptions: ~14% click-through and ~14% visit-to-registration. Measure actuals daily; these are targets, not outcomes." })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "asset",
			className: "asset-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						number: "03 / THE ASSET",
						children: "SOMETHING YOU CAN ACTUALLY USE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-intro reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-heading",
							children: [
								"The message",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "is the medium." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A sample forwardable message, written for the channel where this campaign begins. Switch the angle. Copy the draft. Replace the placeholder with the real workshop link before sending." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "asset-workspace reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "asset-controls",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "overline",
								children: "MESSAGE LAB / 01"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Pick the hook" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "message-tabs",
								role: "tablist",
								"aria-label": "Message angle",
								children: messageVariants.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: selectedMessage === index ? "default" : "outline",
									className: "message-tab",
									role: "tab",
									"aria-selected": selectedMessage === index,
									onClick: () => {
										setSelectedMessage(index);
										setCopied(false);
									},
									children: item.label
								}, item.label))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "message-stage",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "message-meta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FORWARD DRAFT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WHATSAPP / STUDENT-TO-STUDENT" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "message-copy",
									children: messageVariants[selectedMessage]?.text
								}, selectedMessage),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "message-footer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHORT. PERSONAL. ONE CLEAR ACTION." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: copyMessage,
										className: "copy-button",
										children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 17 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 17 }), copied ? "COPIED" : "COPY DRAFT"]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "asset-disclaimer",
						children: "This is a campaign draft, not a live registration or referral system. No student data is collected here."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "budget",
			className: "budget-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						number: "04 / THE MONEY",
						children: "EVERY RUPEE NEEDS A JOB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-intro reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-heading",
							children: [
								"₹2,000.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "No magic." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Spend most of it helping the human distribution work. Adjust the split below; the total stays fixed." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "budget-layout reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "budget-visual",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-total",
									children: ["₹2,000 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FIXED BUDGET" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-meter",
									"aria-label": "Budget allocation",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "budget-segment ambassadors",
											style: { flexGrow: ambassadorSpend }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "budget-segment video",
											style: { flexGrow: videoSpend }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "budget-segment prize",
											style: { flexGrow: 400 }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "budget-segment buffer",
											style: { flexGrow: remaining }
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "budget-hint",
									children: [
										"₹2,000 ÷ 500 target registrations = ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "₹4 target cost per registration." }),
										" This is a goal, not a guaranteed result."
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "budget-lines",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "budget-swatch ambassadors" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ambassador fuel" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "₹80 mobile recharge per active ambassador" })
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "budget-stepper",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "icon",
												"aria-label": "Decrease ambassador budget",
												disabled: ambassadorSpend <= 400,
												onClick: () => setAmbassadorSpend((v) => v - 80),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["₹", ambassadorSpend] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "icon",
												"aria-label": "Increase ambassador budget",
												disabled: ambassadorSpend >= 1200,
												onClick: () => setAmbassadorSpend((v) => v + 80),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "budget-swatch video" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demo video boost" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Small paid test, only after organic copy shows traction" })
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["₹", videoSpend] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "budget-swatch prize" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Top ambassador prize" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Reward for verified registrations, not group spam" })
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "₹400" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "budget-swatch buffer" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Contingency" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Redirect to the lowest-cost channel on day three" })
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["₹", remaining] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "budget-summary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"AT THIS SPLIT: UP TO ",
										ambassadorCount,
										" AMBASSADORS FUNDED"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": "Reset budget split",
										title: "Reset budget split",
										onClick: () => setAmbassadorSpend(800),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 })
									})]
								})
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "timeline",
			className: "timeline-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						number: "05 / THE CLOCK",
						children: "SEVEN DAYS, NOT SEVEN WEEKS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-intro reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-heading",
							children: [
								"Ship. Measure.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Correct course." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A campaign only matters if someone knows what to do tomorrow morning." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "timeline-grid reveal",
						children: [
							{
								day: "D01",
								title: "Set the baseline",
								text: "Finalize message, workshop link, tracking tags and 15-second demo. Line up ambassadors."
							},
							{
								day: "D02–03",
								title: "Launch the trusted channels",
								text: "Seed relevant groups, contact 30 clubs and placement cells. Watch unique visits and verified registrations."
							},
							{
								day: "D04–05",
								title: "Follow the signal",
								text: "Cut weak copy, boost the best-performing message and redirect the remaining spend."
							},
							{
								day: "D06–07",
								title: "Close the loop",
								text: "Send honest reminders, check duplicate signups and report cost per verified registration."
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "timeline-item",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.day }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
							]
						}, item.day))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "judgment",
			className: "judgment-section section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						number: "06 / THE JUDGMENT",
						children: "WHAT AI DIDN'T DECIDE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-intro reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-heading",
							children: [
								"The best idea",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"was ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "what I cut." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI helped generate options and draft copy. It didn't decide which ideas deserved seven scarce days." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "judgment-list reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / CHANNEL SPRAWL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI suggested SEO, LinkedIn, webinars and more. I chose three channels with a direct path to students instead of pretending I could execute twenty." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 / FAKE URGENCY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI suggested countdowns and “only 23 seats left.” I rejected invented scarcity. Trust is hard to earn and easy to spend." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 / POLISHED-BUT-DEAD COPY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI wrote long, formal forwards. I cut them down to something a student might actually send to a friend." })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "closing-thought reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IF I HAD ONE MORE DAY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'd test the three message angles with actual students, keep the one they naturally forward, and replace every assumption above with observed data." })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "finale",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "overline",
						children: "NXTWAVE GROWTH INTERN / ROUND 1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"Less pitch.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "More proof." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "finale-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"A concrete plan for a very real constraint.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"500 registrations are the target. The work starts with the first forward."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://forms.gle/xEtJSgJfeqvnxv8q6",
							target: "_blank",
							rel: "noreferrer",
							className: "submission-link",
							children: ["OPEN SUBMISSION FORM ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 20 })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE 500-STUDENT EXPERIMENT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							children: "BACK TO TOP ↑"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
