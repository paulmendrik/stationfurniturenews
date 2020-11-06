import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, z as validate_each_argument, v as validate_slots, e as element, t as text, a as space, g as claim_element, h as children, j as claim_text, b as detach_dev, f as claim_space, l as attr_dev, m as add_location, o as insert_dev, p as append_dev, u as set_data_dev, A as noop, B as destroy_each } from './client.1da179ab.js';
import { P as PrismicDOM } from './prismic-config.af65f472.js';

/* src/components/Updates.svelte generated by Svelte v3.24.0 */
const file = "src/components/Updates.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (17:0) {#each updates as update}
function create_each_block(ctx) {
	let li;
	let article;
	let h3;
	let t0_value = PrismicDOM.RichText.asText(/*update*/ ctx[2].data.title) + "";
	let t0;
	let t1;
	let p0;
	let t2_value = formatDate(/*update*/ ctx[2].data.date) + "";
	let t2;
	let t3;
	let p1;
	let t4_value = PrismicDOM.RichText.asText(/*update*/ ctx[2].data.content) + "";
	let t4;
	let t5;

	const block = {
		c: function create() {
			li = element("li");
			article = element("article");
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text(t4_value);
			t5 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			article = claim_element(li_nodes, "ARTICLE", { class: true, "uk-grid": true });
			var article_nodes = children(article);
			h3 = claim_element(article_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(article_nodes);
			p0 = claim_element(article_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, t2_value);
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(article_nodes);
			p1 = claim_element(article_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, t4_value);
			p1_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			t5 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", "uk-article-title svelte-1bo8kf6");
			add_location(h3, file, 19, 0, 468);
			attr_dev(p0, "class", "uk-article-meta date svelte-1bo8kf6");
			add_location(p0, file, 20, 0, 550);
			add_location(p1, file, 21, 0, 617);
			attr_dev(article, "class", "uk-article  uk-grid-collapse uk-margin");
			attr_dev(article, "uk-grid", "");
			add_location(article, file, 18, 0, 403);
			attr_dev(li, "class", "svelte-1bo8kf6");
			add_location(li, file, 17, 0, 398);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, article);
			append_dev(article, h3);
			append_dev(h3, t0);
			append_dev(article, t1);
			append_dev(article, p0);
			append_dev(p0, t2);
			append_dev(article, t3);
			append_dev(article, p1);
			append_dev(p1, t4);
			append_dev(li, t5);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*updates*/ 1 && t0_value !== (t0_value = PrismicDOM.RichText.asText(/*update*/ ctx[2].data.title) + "")) set_data_dev(t0, t0_value);
			if (dirty & /*updates*/ 1 && t2_value !== (t2_value = formatDate(/*update*/ ctx[2].data.date) + "")) set_data_dev(t2, t2_value);
			if (dirty & /*updates*/ 1 && t4_value !== (t4_value = PrismicDOM.RichText.asText(/*update*/ ctx[2].data.content) + "")) set_data_dev(t4, t4_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(17:0) {#each updates as update}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let ul;
	let each_value = /*updates*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, "uk-scrollspy": true });
			var div_nodes = children(div);
			ul = claim_element(div_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "uk-list updates uk-flex uk-flex-column svelte-1bo8kf6");
			add_location(ul, file, 14, 0, 319);
			attr_dev(div, "class", "uk-container uk-container-small");
			attr_dev(div, "uk-scrollspy", "cls: uk-animation-fade; target: .uk-article; delay: 500; repeat: true");
			add_location(div, file, 13, 0, 187);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*PrismicDOM, updates, formatDate*/ 3) {
				each_value = /*updates*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function formatDate(date) {
	return new Date(date).toLocaleDateString();
}

function instance($$self, $$props, $$invalidate) {
	let { updates } = $$props;
	const writable_props = ["updates"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Updates> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Updates", $$slots, []);

	$$self.$set = $$props => {
		if ("updates" in $$props) $$invalidate(0, updates = $$props.updates);
	};

	$$self.$capture_state = () => ({ PrismicDOM, updates, formatDate });

	$$self.$inject_state = $$props => {
		if ("updates" in $$props) $$invalidate(0, updates = $$props.updates);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [updates, formatDate];
}

class Updates extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { updates: 0, formatDate: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Updates",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*updates*/ ctx[0] === undefined && !("updates" in props)) {
			console.warn("<Updates> was created without expected prop 'updates'");
		}
	}

	get updates() {
		throw new Error("<Updates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set updates(value) {
		throw new Error("<Updates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get formatDate() {
		return formatDate;
	}

	set formatDate(value) {
		throw new Error("<Updates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Updates as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlcy40OTJhY2QxOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVXBkYXRlcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgUHJpc21pY0RPTSBmcm9tICdwcmlzbWljLWRvbSc7XG5cbiAgICBleHBvcnQgbGV0IHVwZGF0ZXM7XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgIH1cblxuPC9zY3JpcHQ+XG5cblxuXG48ZGl2IGNsYXNzPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiICB1ay1zY3JvbGxzcHk9XCJjbHM6IHVrLWFuaW1hdGlvbi1mYWRlOyB0YXJnZXQ6IC51ay1hcnRpY2xlOyBkZWxheTogNTAwOyByZXBlYXQ6IHRydWVcIj5cbjx1bCBjbGFzcz1cInVrLWxpc3QgdXBkYXRlcyB1ay1mbGV4IHVrLWZsZXgtY29sdW1uXCI+XG5cbnsjZWFjaCB1cGRhdGVzIGFzIHVwZGF0ZX1cbjxsaT5cbjxhcnRpY2xlIGNsYXNzPVwidWstYXJ0aWNsZSAgdWstZ3JpZC1jb2xsYXBzZSB1ay1tYXJnaW5cIiB1ay1ncmlkPlxuPGgzIGNsYXNzPVwidWstYXJ0aWNsZS10aXRsZVwiPntQcmlzbWljRE9NLlJpY2hUZXh0LmFzVGV4dCh1cGRhdGUuZGF0YS50aXRsZSl9PC9oMz5cbjxwIGNsYXNzPVwidWstYXJ0aWNsZS1tZXRhIGRhdGVcIj57Zm9ybWF0RGF0ZSh1cGRhdGUuZGF0YS5kYXRlKX08L3A+XG48cD57UHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQodXBkYXRlLmRhdGEuY29udGVudCl9PC9wPlxuPC9hcnRpY2xlPlxuPC9saT5cbnsvZWFjaH1cblxuPC91bD5cbjwvZGl2PlxuXG48c3R5bGU+XG5cbiAgICB1bC51cGRhdGVzIGxpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS43NXJlbSFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbiAgICBoMy51ay1hcnRpY2xlLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIixzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBwLmRhdGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIixzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG5cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTExMnB4KSB7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4gICAgfVxuXG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBoMy51ay1hcnRpY2xlLXRpdGxlIHsgbWFyZ2luOiAwLjVyZW0gMCAhaW1wb3J0YW50OyBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDsgfVxuICAgICAgICBwLmRhdGUgeyBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMC42ODc1cmVtICFpbXBvcnRhbnQ7fVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgICBoMy51ay1hcnRpY2xlLXRpdGxlIHsgbWFyZ2luOiAwLjVyZW0gMCAhaW1wb3J0YW50OyBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDsgfVxuICAgICAgICBwLmRhdGUgeyBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMC42ODc1cmVtICFpbXBvcnRhbnQ7fVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICBoMy51ay1hcnRpY2xlLXRpdGxlIHsgbWFyZ2luOiAwLjVyZW0gIDAgIWltcG9ydGFudDsgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgcC5kYXRlIHsgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50OyBmb250LXNpemU6IDAuNjg3NXJlbSAhaW1wb3J0YW50O31cbiAgICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQW1COEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLFlBQUMsR0FBTSxJQUFDLElBQUksQ0FBQyxLQUFLOzs7O2dCQUN6QyxVQUFVLFlBQUMsR0FBTSxJQUFDLElBQUksQ0FBQyxJQUFJOzs7O2dCQUN4RCxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sWUFBQyxHQUFNLElBQUMsSUFBSSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFGcEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLFlBQUMsR0FBTSxJQUFDLElBQUksQ0FBQyxLQUFLO3lEQUN6QyxVQUFVLFlBQUMsR0FBTSxJQUFDLElBQUksQ0FBQyxJQUFJO3lEQUN4RCxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sWUFBQyxHQUFNLElBQUMsSUFBSSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFMM0MsR0FBTzs7OztnQ0FBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFDLEdBQU87Ozs7K0JBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBWGMsVUFBVSxDQUFDLElBQUk7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxrQkFBa0I7Ozs7T0FIakMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
