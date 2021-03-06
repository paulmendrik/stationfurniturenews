import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, c as create_component, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_element, h as children, j as claim_text, k as claim_component, l as attr_dev, m as add_location, n as set_style, o as insert_dev, p as append_dev, r as mount_component, u as set_data_dev, w as transition_in, x as transition_out, y as destroy_component } from './client.1da179ab.js';
import { C as Client, i as index, P as PrismicDOM } from './prismic-config.af65f472.js';
import { U as Updates } from './Updates.492acd19.js';

/* src/routes/index.svelte generated by Svelte v3.24.0 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let h1;
	let t1_value = PrismicDOM.RichText.asText(/*intro*/ ctx[0].data.quote) + "";
	let t1;
	let t2;
	let updates_1;
	let current;

	updates_1 = new Updates({
			props: { updates: /*updates*/ ctx[1] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			create_component(updates_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ff9udm\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);

			div1 = claim_element(nodes, "DIV", {
				class: true,
				style: true,
				"uk-height-viewport": true
			});

			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true, "data-uk-scrollspy": true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(updates_1.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Station Furniture News";
			attr_dev(h1, "class", "quote uk-heading-primary animate uk-invisible svelte-1d4vevt");
			add_location(h1, file, 41, 0, 1208);
			attr_dev(div0, "class", "intro uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical");
			attr_dev(div0, "data-uk-scrollspy", "target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300");
			add_location(div0, file, 40, 0, 1017);
			attr_dev(div1, "class", "home uk-background-cover uk-light uk-flex svelte-1d4vevt");
			set_style(div1, "background-image", "url('" + /*intro*/ ctx[0].data.image.url + "')");
			attr_dev(div1, "uk-height-viewport", "offset-bottom: 20");
			add_location(div1, file, 39, 0, 865);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			mount_component(updates_1, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*intro*/ 1) && t1_value !== (t1_value = PrismicDOM.RichText.asText(/*intro*/ ctx[0].data.quote) + "")) set_data_dev(t1, t1_value);

			if (!current || dirty & /*intro*/ 1) {
				set_style(div1, "background-image", "url('" + /*intro*/ ctx[0].data.image.url + "')");
			}

			const updates_1_changes = {};
			if (dirty & /*updates*/ 2) updates_1_changes.updates = /*updates*/ ctx[1];
			updates_1.$set(updates_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(updates_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(updates_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
			destroy_component(updates_1, detaching);
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
let updates;

async function preload({ params, query }) {
	const intro = await Client.getSingle("home");

	const update = await Client.query(index.Predicates.at("document.type", "update"), {
		orderings: "[my.update.publication_date desc]"
	});

	updates = update.results;
	return { intro, updates };
}

function formatDate(date) {
	return new Date(date).toLocaleDateString();
}

function instance($$self, $$props, $$invalidate) {
	let { intro } = $$props;
	let { updates } = $$props;
	const writable_props = ["intro", "updates"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$set = $$props => {
		if ("intro" in $$props) $$invalidate(0, intro = $$props.intro);
		if ("updates" in $$props) $$invalidate(1, updates = $$props.updates);
	};

	$$self.$capture_state = () => ({
		Prismic: index,
		PrismicDOM,
		Client,
		Updates,
		intro,
		updates,
		preload,
		formatDate,
		intro,
		updates
	});

	$$self.$inject_state = $$props => {
		if ("intro" in $$props) $$invalidate(0, intro = $$props.intro);
		if ("updates" in $$props) $$invalidate(1, updates = $$props.updates);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [intro, updates];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { intro: 0, updates: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*intro*/ ctx[0] === undefined && !("intro" in props)) {
			console.warn("<Routes> was created without expected prop 'intro'");
		}

		if (/*updates*/ ctx[1] === undefined && !("updates" in props)) {
			console.warn("<Routes> was created without expected prop 'updates'");
		}
	}

	get intro() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set intro(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get updates() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set updates(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { formatDate, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjhhNzE0NzEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgaW1wb3J0IFByaXNtaWMgZnJvbSAncHJpc21pYy1qYXZhc2NyaXB0JztcbiAgICBpbXBvcnQgUHJpc21pY0RPTSBmcm9tICdwcmlzbWljLWRvbSc7XG4gICAgaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vcHJpc21pYy1jb25maWcuanMnO1xuICAgIGltcG9ydCAgVXBkYXRlcyBmcm9tICcuLi9jb21wb25lbnRzL1VwZGF0ZXMuc3ZlbHRlJztcblxuICAgIGxldCBpbnRybztcbiAgICBsZXQgdXBkYXRlcztcblxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAgICAgY29uc3QgaW50cm8gPSBhd2FpdCBDbGllbnQuZ2V0U2luZ2xlKCdob21lJyk7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlID0gYXdhaXQgQ2xpZW50LnF1ZXJ5KFxuICAgICAgICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3VwZGF0ZScpLFxuICAgICAgICAgICAgeyBvcmRlcmluZ3M6ICdbbXkudXBkYXRlLnB1YmxpY2F0aW9uX2RhdGUgZGVzY10nIH1cbiAgICAgICAgKVxuXG4gICAgICAgIHVwZGF0ZXMgPSB1cGRhdGUucmVzdWx0c1xuXG5cbiAgICAgICAgcmV0dXJuIHtpbnRybyx1cGRhdGVzfTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgIH1cblxuPC9zY3JpcHQ+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgaW50cm87XG4gICAgZXhwb3J0IGxldCB1cGRhdGVzO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbjx0aXRsZT5TdGF0aW9uIEZ1cm5pdHVyZSBOZXdzPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJob21lIHVrLWJhY2tncm91bmQtY292ZXIgdWstbGlnaHQgdWstZmxleFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCd7aW50cm8uZGF0YS5pbWFnZS51cmx9Jyk7XCIgdWstaGVpZ2h0LXZpZXdwb3J0PVwib2Zmc2V0LWJvdHRvbTogMjBcIj5cbjxkaXYgY2xhc3M9XCJpbnRybyB1ay13aWR0aC0xLTJAbSB1ay10ZXh0LWNlbnRlciB1ay1tYXJnaW4tYXV0byB1ay1tYXJnaW4tYXV0by12ZXJ0aWNhbFwiIGRhdGEtdWstc2Nyb2xsc3B5PVwidGFyZ2V0OiA+IC5hbmltYXRlOyBjbHM6IHVrLWFuaW1hdGlvbi1zbGlkZS1ib3R0b20tc21hbGwgdWstaW52aXNpYmxlOyBkZWxheTogMzAwXCI+XG48aDEgY2xhc3M9XCJxdW90ZSB1ay1oZWFkaW5nLXByaW1hcnkgYW5pbWF0ZSB1ay1pbnZpc2libGVcIj57UHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoaW50cm8uZGF0YS5xdW90ZSl9PC9oMT5cbjwvZGl2PlxuPC9kaXY+XG5cbjxVcGRhdGVzIHVwZGF0ZXM9XCJ7dXBkYXRlc31cIiAvPlxuXG48c3R5bGU+XG5cbiAgICAuaG9tZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBoMS5xdW90ZSB7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHBsYW50aW4sIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgICAgICBoMS5xdW90ZSB7Zm9udC1zaXplOiAyLjVyZW07fVxuXG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgICAgIGgxLnF1b3RlIHtmb250LXNpemU6IDJyZW07fVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICBoMS5xdW90ZSB7Zm9udC1zaXplOiAycmVtO31cbiAgICB9XG48L3N0eWxlPlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiUHJpc21pYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2dCQXlDMkQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLFdBQUMsR0FBSyxJQUFDLElBQUksQ0FBQyxLQUFLOzs7Ozs7O2lDQUluRixHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFONEQsR0FBSyxJQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O3FFQUUvQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sV0FBQyxHQUFLLElBQUMsSUFBSSxDQUFDLEtBQUs7Ozs0REFGaEIsR0FBSyxJQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztzRUFNdkYsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBckNsQixPQUFPOztlQUdXLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUNuQyxLQUFLLFNBQVMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNOztPQUVyQyxNQUFNLFNBQVMsTUFBTSxDQUFDLEtBQUssQ0FDN0JBLEtBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxRQUFRO0VBQzdDLFNBQVMsRUFBRSxtQ0FBbUM7OztDQUdwRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87VUFHaEIsS0FBSyxFQUFDLE9BQU87OztTQUdULFVBQVUsQ0FBQyxJQUFJO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCOzs7O09BS2pDLEtBQUs7T0FDTCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
