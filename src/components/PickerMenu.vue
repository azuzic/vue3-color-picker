<template>
	<div class="ck-cp-menu">
		<div class="ck-cp-controller-bar" style="display: flex; justify-content: end; position: relative; flex-grow: 1">
			<!-- CHANGE Picker Mode BUTTON -->
			<button v-if="showPickerMode" type="button" class="cp-btn" @click="handleChangePickerMode" style="margin-bottom: var(--margin-top)">
				<span v-show="mode == 'gradient'">{{ local.gradient ? local.gradient : "Gradient" }}</span>
				<span v-show="mode == 'solid'">{{ local.solid ? local.solid : "Solid" }}</span>
				<i v-if="iconClasses.arrowDown" :class="iconClasses.arrowDown"></i>
				<svg v-else width="16" height="16" viewBox="-12 -4 32 32" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" />
				</svg>
			</button>
			<!-- CHANGE Picker Mode BUTTON -->

			<!-- CHANGE Gradient Mode BUTTON -->
			<button v-if="mode == 'gradient'" type="button" class="cp-btn" style="margin-bottom: var(--margin-top)" @click="handleChangeGradientMode">
				<span v-show="gradientType == 'linear'"> {{ local.linear ? local.linear : "Linear" }}</span>
				<span v-show="gradientType == 'radial'">{{ local.radial ? local.radial : "Radial" }}</span>
				<i v-if="iconClasses.arrowDown" :class="iconClasses.arrowDown"></i>
				<svg v-else width="16" height="16" viewBox="-12 -4 32 32" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" />
				</svg>
			</button>
			<!-- CHANGE Gradient Mode BUTTON -->

			<ColorInputMenu
				v-if="showInputMenu"
				style="margin-bottom: var(--margin-top)"
				:iconClass="iconClasses.arrowDown"
				:inputType="inputType"
				@onChangeInputName="handleChangeInputType">
			</ColorInputMenu>

			<button
				v-if="mode == 'gradient'"
				type="button"
				class="cp-btn"
				style="margin-bottom: var(--margin-top)"
				@click="isShowAngleRange = !isShowAngleRange">
				<i v-if="iconClasses.ruler" :class="iconClasses.ruler"></i>

				<svg v-else width="15" height="28" viewBox="0 -3 36 36" xmlns="http://www.w3.org/2000/svg">
					<path d="M29.333 9.667h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path>
					<path d="M8 9.667h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path>
					<path
						d="M13.333 14.333c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM13.333 5c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path>
					<path d="M29.333 24.333h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path>
					<path d="M10.667 24.333h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path>
					<path
						d="M18.667 29c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM18.667 19.667c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path>
				</svg>
			</button>
		</div>
	</div>
	<div v-if="mode == 'gradient'" v-show="gradientType == 'linear' && isShowAngleRange" class="ck-cp-linear-angle-container">
		<div>
			<p class="ck-gradient-set-label" style="margin-top: 0">
				{{ local.angle ? local.angle : "Angle" }}
				<span>{{ angle }}°</span>
			</p>
			<input type="range" min="0" max="360" :value="angle" @input="handleInput($event, 'angle')" />
		</div>
	</div>

	<div v-if="mode == 'gradient' && isShowAngleRange" v-show="gradientType == 'radial'" class="ck-cp-linear-angle-container">
		<div>
			<p class="ck-gradient-set-label" style="margin-top: 0">
				{{ local.positionX ? local.positionX : "Position X" }}
				<span>{{ percentageX }}%</span>
			</p>
			<input type="range" min="0" max="100" :value="percentageX" @input="handleInput($event, 'percentageX')" />
		</div>
		<div>
			<p class="ck-gradient-set-label">
				{{ local.positionY ? local.positionY : "Position Y" }}
				<span>{{ percentageY }}%</span>
			</p>
			<input type="range" min="0" max="100" :value="percentageY" @input="handleInput($event, 'percentageY')" />
		</div>
		<div class="ck-cp-input-container" style="margin-left: 2px; margin-right: 2px">
			<div class="ck-cp-input-content">
				<span class="ck-cp-input-label"> Position X </span>
				<input type="number" :value="percentageX" @input="handleInput($event, 'percentageX')" />
			</div>
			<div class="ck-cp-input-content">
				<span class="ck-cp-input-label"> Position Y </span>
				<input type="number" :value="percentageY" @input="handleInput($event, 'percentageY')" />
			</div>
		</div>
		<div class="ck-cp-checkbox-container">
			<label class="ck-cp-checkbox" for="customSize">
				<div class="ck-cp-input-checkbox-checked" v-if="customSize">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z" />
					</svg>
				</div>
				<div class="ck-cp-input-checkbox-unchecked" v-else></div>
				<input id="customSize" type="checkbox" @input="handleInput($event, 'customSize')" />
			</label>
			<div class="ck-cp-checkbox-label">{{ customSize ? "Custom" : "Circle" }}</div>
		</div>

		<div v-if="customSize">
			<p class="ck-gradient-set-label">
				{{ local.sizeX ? local.sizeX : "Size X" }}
				<span>{{ percentageSizeX }}%</span>
			</p>
			<input type="range" min="0" max="100" :value="percentageSizeX" @input="handleInput($event, 'percentageSizeX')" />
		</div>
		<div v-if="customSize">
			<p class="ck-gradient-set-label">
				{{ local.sizeY ? local.sizeY : "Size Y" }}
				<span>{{ percentageSizeY }}%</span>
			</p>
			<input type="range" min="0" max="100" :value="percentageSizeY" @input="handleInput($event, 'percentageSizeY')" />
		</div>

		<div class="ck-cp-input-container" style="margin-left: 2px; margin-right: 2px" v-if="customSize">
			<div class="ck-cp-input-content">
				<span class="ck-cp-input-label"> Size X </span>
				<input type="number" :value="percentageSizeX" @input="handleInput($event, 'percentageSizeX')" />
			</div>
			<div class="ck-cp-input-content">
				<span class="ck-cp-input-label"> Size Y </span>
				<input type="number" :value="percentageSizeY" @input="handleInput($event, 'percentageSizeY')" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Mode, InputType, Local, IconClasses } from "../core/types/types.ts";
import ColorInputMenu from "./ColorInputMenu.vue";

const props = defineProps({
	mode: {
		default: "gradient",
		type: String as () => Mode,
	},
	inputType: { default: "RGB", type: String as () => InputType },
	gradientType: { default: "linear", type: String },
	showInputMenu: { default: true, type: Boolean },
	showPickerMode: { default: true, type: Boolean },
	angle: { default: 90, type: Number },
	percentageX: { default: 50, type: Number },
	percentageY: { default: 50, type: Number },
	percentageSizeX: { default: 50, type: Number },
	percentageSizeY: { default: 50, type: Number },
	customSize: { default: false, type: Boolean },
	local: {
		default: {},
		type: Object as () => Local,
	},
	iconClasses: {
		default: {
			ruler: "",
			eyeDroper: "",
			arrowDown: "",
			save: "",
			delete: "",
		},
		type: Object as () => IconClasses,
	},
});

const isShowAngleRange = ref(false);

const emits = defineEmits<{
	(e: "onPickerChangeMode", value: Mode): void;
	(e: "onChangeMode", value: string): void;
	(e: "onChangeInputType", value: InputType): void;
	(e: "onDeleteColor"): void;
	(e: "onClickEyeDropper"): void;
	(e: "update:angle", value: number): void;
	(e: "update:percentageX", value: number): void;
	(e: "update:percentageY", value: number): void;
	(e: "update:percentageSizeX", value: number): void;
	(e: "update:percentageSizeY", value: number): void;
	(e: "update:customSize", value: boolean): void;
	(e: "onInput"): void;
}>();

const handleInput = (event: Event, type: string) => {
	switch (type) {
		case "angle":
			emits("update:angle", parseInt((event.target as HTMLInputElement).value));
			emits("onInput");
			break;

		case "percentageX":
			emits("update:percentageX", parseInt((event.target as HTMLInputElement).value));
			emits("onInput");
			break;
		case "percentageY":
			emits("update:percentageY", parseInt((event.target as HTMLInputElement).value));
			emits("onInput");
			break;
		case "percentageSizeX":
			emits("update:percentageSizeX", parseInt((event.target as HTMLInputElement).value));
			emits("onInput");
			break;
		case "percentageSizeY":
			emits("update:percentageSizeY", parseInt((event.target as HTMLInputElement).value));
			emits("onInput");
			break;
		case "customSize":
			emits("update:customSize", (event.target as HTMLInputElement).checked);
			emits("onInput");
			break;
	}
};

const handleChangeInputType = (event: InputType) => {
	emits("onChangeInputType", event);
};

const handleChangeGradientMode = () => {
	emits("onChangeMode", props.gradientType == "linear" ? "radial" : "linear");
};

const handleChangePickerMode = () => {
	emits("onPickerChangeMode", props.mode == "gradient" ? "solid" : "gradient");
};
</script>

<style lang="scss" scoped></style>
