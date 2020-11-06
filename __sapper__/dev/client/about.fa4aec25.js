import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, c as create_component, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_element, h as children, j as claim_text, k as claim_component, l as attr_dev, m as add_location, p as insert_dev, r as append_dev, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './client.8634c1c1.js';
import { C as Client, i as index } from './prismic-config.af65f472.js';
import { U as Updates } from './Updates.f2e11fa9.js';
import { P as PrismicHTML } from './PrismicHTML.7bca5194.js';

/* src/routes/about.svelte generated by Svelte v3.24.0 */
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let section0;
	let div1;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let section1;
	let div2;
	let h20;
	let t2;
	let t3;
	let prismichtml;
	let t4;
	let h21;
	let t5;
	let t6;
	let updates_1;
	let current;

	prismichtml = new PrismicHTML({
			props: { elements: /*about*/ ctx[0].data.content },
			$$inline: true
		});

	updates_1 = new Updates({
			props: { updates: /*updates*/ ctx[1] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			section0 = element("section");
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			section1 = element("section");
			div2 = element("div");
			h20 = element("h2");
			t2 = text("Coronavirus");
			t3 = space();
			create_component(prismichtml.$$.fragment);
			t4 = space();
			h21 = element("h2");
			t5 = text("Coronavirus Updates");
			t6 = space();
			create_component(updates_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-6semps\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section0 = claim_element(nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div1 = claim_element(section0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				src: true,
				alt: true,
				"data-uk-cover": true
			});

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div2 = claim_element(section1_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h20 = claim_element(div2_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t2 = claim_text(h20_nodes, "Coronavirus");
			h20_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			claim_component(prismichtml.$$.fragment, div2_nodes);
			t4 = claim_space(div2_nodes);
			h21 = claim_element(div2_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t5 = claim_text(h21_nodes, "Coronavirus Updates");
			h21_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t6 = claim_space(section1_nodes);
			claim_component(updates_1.$$.fragment, section1_nodes);
			section1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Coronavirus & Updates";
			if (img.src !== (img_src_value = /*about*/ ctx[0].data.banner.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Coronvirus and Updates");
			attr_dev(img, "data-uk-cover", "");
			add_location(img, file, 40, 0, 1063);
			attr_dev(div0, "class", "uk-height-large uk-cover-container");
			add_location(div0, file, 39, 0, 1014);
			attr_dev(div1, "class", "uk-container");
			add_location(div1, file, 38, 0, 987);
			attr_dev(section0, "class", "uk-section uk-section-small uk-padding-remove-bottom");
			add_location(section0, file, 37, 0, 916);
			attr_dev(h20, "class", "uk-heading-medium title svelte-1x6przr");
			add_location(h20, file, 47, 0, 1260);
			attr_dev(h21, "class", "uk-heading-divider title svelte-1x6przr");
			add_location(h21, file, 49, 0, 1359);
			attr_dev(div2, "class", "uk-container uk-container-small");
			add_location(div2, file, 46, 0, 1214);
			attr_dev(section1, "class", "uk-section-small uk-article");
			add_location(section1, file, 45, 0, 1168);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section0, anchor);
			append_dev(section0, div1);
			append_dev(div1, div0);
			append_dev(div0, img);
			insert_dev(target, t1, anchor);
			insert_dev(target, section1, anchor);
			append_dev(section1, div2);
			append_dev(div2, h20);
			append_dev(h20, t2);
			append_dev(div2, t3);
			mount_component(prismichtml, div2, null);
			append_dev(div2, t4);
			append_dev(div2, h21);
			append_dev(h21, t5);
			append_dev(section1, t6);
			mount_component(updates_1, section1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*about*/ 1 && img.src !== (img_src_value = /*about*/ ctx[0].data.banner.url)) {
				attr_dev(img, "src", img_src_value);
			}

			const prismichtml_changes = {};
			if (dirty & /*about*/ 1) prismichtml_changes.elements = /*about*/ ctx[0].data.content;
			prismichtml.$set(prismichtml_changes);
			const updates_1_changes = {};
			if (dirty & /*updates*/ 2) updates_1_changes.updates = /*updates*/ ctx[1];
			updates_1.$set(updates_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(prismichtml.$$.fragment, local);
			transition_in(updates_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(prismichtml.$$.fragment, local);
			transition_out(updates_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(section1);
			destroy_component(prismichtml);
			destroy_component(updates_1);
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

let about;
let updates;

async function preload({ params, query }) {
	about = await Client.getSingle("about");

	const updateResponse = await Client.query(index.Predicates.at("document.type", "update"), {
		orderings: "[my.post.publication_date desc]"
	});

	updates = updateResponse.results;

	if (about && updates) {
		return { about, updates };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { about } = $$props;
	let { updates } = $$props;
	const writable_props = ["about", "updates"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);

	$$self.$set = $$props => {
		if ("about" in $$props) $$invalidate(0, about = $$props.about);
		if ("updates" in $$props) $$invalidate(1, updates = $$props.updates);
	};

	$$self.$capture_state = () => ({
		PrismicHTML,
		Prismic: index,
		Client,
		Updates,
		about,
		updates,
		preload,
		about,
		updates
	});

	$$self.$inject_state = $$props => {
		if ("about" in $$props) $$invalidate(0, about = $$props.about);
		if ("updates" in $$props) $$invalidate(1, updates = $$props.updates);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [about, updates];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { about: 0, updates: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*about*/ ctx[0] === undefined && !("about" in props)) {
			console.warn("<About> was created without expected prop 'about'");
		}

		if (/*updates*/ ctx[1] === undefined && !("updates" in props)) {
			console.warn("<About> was created without expected prop 'updates'");
		}
	}

	get about() {
		throw new Error("<About>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set about(value) {
		throw new Error("<About>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get updates() {
		throw new Error("<About>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set updates(value) {
		throw new Error("<About>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default About;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZmE0YWVjMjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXG4gICAgaW1wb3J0IFByaXNtaWNIVE1MIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpc21pY0hUTUwuc3ZlbHRlJztcbiAgICBpbXBvcnQgUHJpc21pYyBmcm9tICdwcmlzbWljLWphdmFzY3JpcHQnO1xuICAgIGltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3ByaXNtaWMtY29uZmlnLmpzJztcbiAgICBpbXBvcnQgVXBkYXRlcyBmcm9tICcuLi9jb21wb25lbnRzL1VwZGF0ZXMuc3ZlbHRlJztcblxuICAgIGxldCBhYm91dDtcbiAgICBsZXQgdXBkYXRlcztcblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICAgIGFib3V0ID0gYXdhaXQgQ2xpZW50LmdldFNpbmdsZSgnYWJvdXQnKTtcblxuICAgICAgICBjb25zdCB1cGRhdGVSZXNwb25zZSA9IGF3YWl0IENsaWVudC5xdWVyeShcbiAgICAgICAgICAgICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAndXBkYXRlJyksXG4gICAgICAgICAgICAgICAgeyBvcmRlcmluZ3M6ICdbbXkucG9zdC5wdWJsaWNhdGlvbl9kYXRlIGRlc2NdJyB9XG4gICAgICAgIClcblxuICAgICAgICB1cGRhdGVzID0gdXBkYXRlUmVzcG9uc2UucmVzdWx0c1xuXG4gICAgICAgIGlmIChhYm91dCAmJiB1cGRhdGVzKSB7XG4gICAgICAgICAgICByZXR1cm4ge2Fib3V0LHVwZGF0ZXN9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBhYm91dDtcbiAgICBleHBvcnQgbGV0IHVwZGF0ZXM7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuPHRpdGxlPkNvcm9uYXZpcnVzICYgVXBkYXRlczwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbiBjbGFzcz1cInVrLXNlY3Rpb24gdWstc2VjdGlvbi1zbWFsbCB1ay1wYWRkaW5nLXJlbW92ZS1ib3R0b21cIj5cbjxkaXYgY2xhc3M9XCJ1ay1jb250YWluZXJcIj5cbjxkaXYgY2xhc3M9XCJ1ay1oZWlnaHQtbGFyZ2UgdWstY292ZXItY29udGFpbmVyXCI+XG48aW1nIHNyYz1cInthYm91dC5kYXRhLmJhbm5lci51cmx9XCIgYWx0PVwiQ29yb252aXJ1cyBhbmQgVXBkYXRlc1wiIGRhdGEtdWstY292ZXI+XG48L2Rpdj5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cInVrLXNlY3Rpb24tc21hbGwgdWstYXJ0aWNsZVwiPlxuPGRpdiBjbGFzcz1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItc21hbGxcIj5cbjxoMiBjbGFzcz1cInVrLWhlYWRpbmctbWVkaXVtIHRpdGxlXCI+Q29yb25hdmlydXM8L2gyPlxuPFByaXNtaWNIVE1MIGVsZW1lbnRzPXthYm91dC5kYXRhLmNvbnRlbnR9IC8+XG48aDIgY2xhc3M9XCJ1ay1oZWFkaW5nLWRpdmlkZXIgdGl0bGVcIj5Db3JvbmF2aXJ1cyBVcGRhdGVzPC9oMj5cbjwvZGl2PlxuPFVwZGF0ZXMgdXBkYXRlcz0ge3VwZGF0ZXN9IC8+XG48L3NlY3Rpb24+XG5cblxuXG5cblxuPHN0eWxlPlxuXG4gICAgaDIudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIixzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDMuNXZ3LCAyLjVyZW0pO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiUHJpc21pYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQWdEdUIsR0FBSyxJQUFDLElBQUksQ0FBQyxPQUFPOzs7OztpQ0FHdEIsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQVhmLEdBQUssSUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUZBQXJCLEdBQUssSUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7O3FFQVFULEdBQUssSUFBQyxJQUFJLENBQUMsT0FBTzs7O3NFQUd0QixHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTVDbEIsS0FBSztJQUNMLE9BQU87O2VBRVcsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO0NBQ3pDLEtBQUssU0FBUyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU87O09BRWhDLGNBQWMsU0FBUyxNQUFNLENBQUMsS0FBSyxDQUNqQ0EsS0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVE7RUFDN0MsU0FBUyxFQUFFLGlDQUFpQzs7O0NBR3RELE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTzs7S0FFNUIsS0FBSyxJQUFJLE9BQU87V0FDUixLQUFLLEVBQUMsT0FBTzs7RUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7OztPQU1oQyxLQUFLO09BQ0wsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
