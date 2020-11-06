import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, z as validate_each_argument, v as validate_slots, C as empty, o as insert_dev, b as detach_dev, A as noop, B as destroy_each, H as HtmlTag } from './client.1da179ab.js';

/* src/components/PrismicHTML.svelte generated by Svelte v3.24.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (16:0) {#each elements as element}
function create_each_block(ctx) {
	let html_tag;
	let raw_value = `<${/*TAGS*/ ctx[0][/*element*/ ctx[2].type]}>${/*element*/ ctx[2].text}</${/*TAGS*/ ctx[0][/*element*/ ctx[2].type]}>` + "";
	let html_anchor;

	const block = {
		c: function create() {
			html_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			html_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(html_anchor);
		},
		m: function mount(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_dev(target, html_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*elements*/ 2 && raw_value !== (raw_value = `<${/*TAGS*/ ctx[0][/*element*/ ctx[2].type]}>${/*element*/ ctx[2].text}</${/*TAGS*/ ctx[0][/*element*/ ctx[2].type]}>` + "")) html_tag.p(raw_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(16:0) {#each elements as element}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let each_1_anchor;
	let each_value = /*elements*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*TAGS, elements*/ 3) {
				each_value = /*elements*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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

function instance($$self, $$props, $$invalidate) {
	const TAGS = {
		heading1: "h1",
		heading2: "h2",
		heading3: "h3",
		heading4: "h4",
		heading5: "h5",
		heading6: "h6",
		paragraph: "p",
		preformatted: "pre"
	};

	let { elements } = $$props;
	const writable_props = ["elements"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PrismicHTML> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("PrismicHTML", $$slots, []);

	$$self.$set = $$props => {
		if ("elements" in $$props) $$invalidate(1, elements = $$props.elements);
	};

	$$self.$capture_state = () => ({ TAGS, elements });

	$$self.$inject_state = $$props => {
		if ("elements" in $$props) $$invalidate(1, elements = $$props.elements);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [TAGS, elements];
}

class PrismicHTML extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { TAGS: 0, elements: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PrismicHTML",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*elements*/ ctx[1] === undefined && !("elements" in props)) {
			console.warn("<PrismicHTML> was created without expected prop 'elements'");
		}
	}

	get TAGS() {
		return this.$$.ctx[0];
	}

	set TAGS(value) {
		throw new Error("<PrismicHTML>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get elements() {
		throw new Error("<PrismicHTML>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set elements(value) {
		throw new Error("<PrismicHTML>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { PrismicHTML as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpc21pY0hUTUwuMzBmZjg5YmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ByaXNtaWNIVE1MLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQ+XG5leHBvcnQgY29uc3QgVEFHUyA9IHtcbiAgICBoZWFkaW5nMTogXCJoMVwiLFxuICAgIGhlYWRpbmcyOiBcImgyXCIsXG4gICAgaGVhZGluZzM6IFwiaDNcIixcbiAgICBoZWFkaW5nNDogXCJoNFwiLFxuICAgIGhlYWRpbmc1OiBcImg1XCIsXG4gICAgaGVhZGluZzY6IFwiaDZcIixcbiAgICBwYXJhZ3JhcGg6IFwicFwiLFxuICAgIHByZWZvcm1hdHRlZDogXCJwcmVcIlxufTtcbmV4cG9ydCBsZXQgZWxlbWVudHM7XG48L3NjcmlwdD5cblxueyNlYWNoIGVsZW1lbnRzIGFzIGVsZW1lbnR9XG4gICAge0BodG1sIGA8JHtUQUdTW2VsZW1lbnQudHlwZV19PiR7ZWxlbWVudC50ZXh0fTwvJHtUQUdTW2VsZW1lbnQudHlwZV19PmB9XG57L2VhY2h9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OEJBZ0JlLEdBQUksZ0JBQUMsR0FBTyxJQUFDLElBQUksaUJBQUssR0FBTyxJQUFDLElBQUksY0FBSyxHQUFJLGdCQUFDLEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5RUFBeEQsR0FBSSxnQkFBQyxHQUFPLElBQUMsSUFBSSxpQkFBSyxHQUFPLElBQUMsSUFBSSxjQUFLLEdBQUksZ0JBQUMsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFEaEUsR0FBUTs7OztnQ0FBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQVE7Ozs7K0JBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWJPLElBQUk7RUFDYixRQUFRLEVBQUUsSUFBSTtFQUNkLFFBQVEsRUFBRSxJQUFJO0VBQ2QsUUFBUSxFQUFFLElBQUk7RUFDZCxRQUFRLEVBQUUsSUFBSTtFQUNkLFFBQVEsRUFBRSxJQUFJO0VBQ2QsUUFBUSxFQUFFLElBQUk7RUFDZCxTQUFTLEVBQUUsR0FBRztFQUNkLFlBQVksRUFBRSxLQUFLOzs7T0FFWixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
