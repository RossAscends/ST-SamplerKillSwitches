
import { setting_names } from '../../../textgen-settings.js';
import { eventSource, event_types } from '../../../../script.js';
const samplerIDs = setting_names;
const samplerHotButtonsContainer = $('#samplerSelectButton').parent().parent();


/* const DOMnames = [
    'temp',
    'temperature_last',
    'rep_pen',
    'rep_pen_range',
    'rep_pen_decay',
    'rep_pen_slope',
    'no_repeat_ngram_size',
    'top_k',
    'top_p',
    'top_a',
    'tfs',
    'epsilon_cutoff',
    'eta_cutoff',
    'typical_p',
    'min_p',
    'penalty_alpha',
    'num_beams',
    'length_penalty',
    'min_length',
    'dynatemp',
    'min_temp',
    'max_temp',
    'dynatemp_exponent',
    'smoothing_factor',
    'smoothing_curve',
    'dry_allowed_length',
    'dry_multiplier',
    'dry_base',
    'dry_sequence_breakers',
    'dry_penalty_last_n',
    'max_tokens_second',
    'encoder_rep_pen',
    'freq_pen',
    'presence_pen',
    'skew',
    'do_sample',
    'early_stopping',
    'seed',
    'add_bos_token',
    'ban_eos_token',
    'skip_special_tokens',
    'include_reasoning',
    'streaming',
    'mirostat_mode',
    'mirostat_tau',
    'mirostat_eta',
    'guidance_scale',
    'negative_prompt',
    'grammar_string',
    'json_schema',
    'banned_tokens',
    'global_banned_tokens',
    'send_banned_tokens',
    'ignore_eos_token',
    'spaces_between_special_tokens',
    'speculative_ngram',
    'sampler_order',
    'sampler_priority',
    'samplers',
    'samplers_priorities',
    'n',
    'logit_bias',
    'custom_model',
    'bypass_status_check',
    'openrouter_allow_fallbacks',
    'xtc_threshold',
    'xtc_probability',
    'nsigma',
    'min_keep',
    'generic_model',
]; */

/* const textgenAPIParamNames = [
    'prompt',
    'model',
    'max_new_tokens',
    'max_tokens',
    'logprobs',
    'temperature',
    'top_p',
    'typical_p',
    'typical',
    'sampler_seed',
    'min_p',
    'repetition_penalty',
    'frequency_penalty',
    'presence_penalty',
    'top_k',
    'skew',
    'min_length',
    'minimum_message_content_tokens',
    'min_tokens',
    'num_beams',
    'length_penalty',
    'early_stopping',
    'add_bos_token',
    'dynamic_temperature',
    'dynatemp_low',
    'dynatemp_high',
    'dynatemp_range',
    'dynatemp_exponent',
    'smoothing_factor',
    'smoothing_curve',
    'dry_allowed_length',
    'dry_multiplier',
    'dry_base',
    'dry_sequence_breakers',
    'dry_penalty_last_n',
    'max_tokens_second',
    'sampler_priority',
    'samplers',
    'stopping_strings',
    'stop',
    'truncation_length',
    'ban_eos_token',
    'skip_special_tokens',
    'include_reasoning',
    'top_a',
    'tfs',
    'epsilon_cutoff',
    'eta_cutoff',
    'mirostat_mode',
    'mirostat_tau',
    'mirostat_eta',
    'custom_token_bans',
    'banned_strings',
    'api_type',
    'api_server',
    'sampler_order',
    'xtc_threshold',
    'xtc_probability',
    'nsigma',
    'top_n_sigma',
    'min_keep',
    'parseSequenceBreakers',
] */

const keyMapping = {
    add_bos_token: 'add_bos_token',
    ban_eos_token: 'ban_eos_token',
    banned_strings: 'global_banned_tokens',
    banned_tokens: 'banned_tokens',
    custom_token_bans: 'banned_tokens',
    dry_allowed_length: 'dry_allowed_length',
    dry_base: 'dry_base',
    dry_multiplier: 'dry_multiplier',
    dry_penalty_last_n: 'dry_penalty_last_n',
    dry_sequence_breakers: 'dry_sequence_breakers',
    dynamic_temperature: 'dynatemp',
    dynatemp_exponent: 'dynatemp_exponent',
    dynatemp_high: 'max_temp',
    dynatemp_low: 'min_temp',
    dynatemp_range: 'rep_pen_range',
    early_stopping: 'early_stopping',
    epsilon_cutoff: 'epsilon_cutoff',
    eta_cutoff: 'eta_cutoff',
    global_banned_tokens: 'global_banned_tokens',
    grammar: 'grammar_string',
    grammar_string: 'grammar_string',
    guidance_scale: 'guidance_scale',
    frequency_penalty: 'freq_pen',
    ignore_eos: 'ban_eos_token',
    include_reasoning: 'include_reasoning',
    length_penalty: 'length_penalty',
    logit_bias: 'logit_bias',
    max_tokens_second: 'max_tokens_second',
    min_keep: 'min_keep',
    min_length: 'min_length',
    min_p: 'min_p',
    min_tokens: 'min_length',
    minimum_message_content_tokens: 'min_length',
    mirostat: 'mirostat',
    mirostat_eta: 'mirostat_eta',
    mirostat_mode: 'mirostat_mode',
    mirostat_tau: 'mirostat_tau',
    negative_prompt: 'negative_prompt',
    nsigma: 'nsigma',
    num_beams: 'num_beams',
    parseSequenceBreakers: 'dry_sequence_breakers',
    presence_penalty: 'presence_pen',
    repetition_penalty: 'rep_pen',
    repeat_last_n: 'rep_pen_range',
    repeat_penalty: 'rep_pen',
    repetition_penalty_range: 'rep_pen_range',
    repetition_penalty_slope: 'rep_pen_slope',
    repetition_penalty_decay: 'rep_pen_decay',
    repetition_decay: 'rep_pen_decay',
    speculative_ngram: 'speculative_ngram',
    rep_pen: 'rep_pen',
    rep_pen_range: 'rep_pen_range',
    rep_pen_slope: 'rep_pen_slope',
    sampler_order: 'sampler_order',
    sampler_priority: 'sampler_priority',
    sampler_seed: 'seed',
    samplers: 'samplers',
    skew: 'skew',
    skip_special_tokens: 'skip_special_tokens',
    smoothing_curve: 'smoothing_curve',
    smoothing_factor: 'smoothing_factor',
    temperature: 'temp',
    temperature_last: 'temperature_last',
    tfs: 'tfs',
    top_a: 'top_a',
    top_k: 'top_k',
    top_n_sigma: 'nsigma',
    top_p: 'top_p',
    typical: 'typical_p',
    typical_p: 'typical_p',
    xtc_probability: 'xtc_probability',
    xtc_threshold: 'xtc_threshold',
};

const skippedSamplers = [
    'min_temp',
    'max_temp',
    'dynatemp_exponent',
    'send_banned_tokens',
    'streaming',
    'dynatemp',
    'banned_tokens',
    'global_banned_tokens',
    'negative_prompt',
];


function addKillSwitch(samplerIDs) {
    // Ensure samplerIDs is an array (since we now pass an array)
    if (!Array.isArray(samplerIDs)) {
        console.error('Error: samplerIDs must be an array, received:', samplerIDs);
        return;
    }

    samplerIDs.forEach((samplerID) => {

        if (skippedSamplers.includes(samplerID)) {
            return;
        }

        const targetSampler = $(`#${samplerID}_textgenerationwebui`);
        if (!targetSampler.length) {
            console.debug(`No element found with ID: ${samplerID}_textgenerationwebui`);
            return;
        }

        const buttonHTML = `<i id="${samplerID}_samplerKillswitch" class="killSwitch fa-solid fa-power-off menu_button toggleEnabled togglable margin0 interactable" title="Toggle this sampler" tabindex="0"></i>`;
        const buttonID = `${samplerID}_samplerKillswitch`;

        var $small = $(`#${samplerID}_textgenerationwebui`).parent();
        if (!$small.length) {
            console.debug(`No parent found for #${samplerID}_textgenerationwebui`);
            return;
        }

        const blockStyleInputIDs = [
            'dry_sequence_breakers_textgenerationwebui',
            'guidance_scale_textgenerationwebui',
            'negative_prompt_textgenerationwebui',
        ];

        if (blockStyleInputIDs.includes(targetSampler.prop('id'))) {
            console.debug(`Found block-style input: ${targetSampler.prop('id')}`);

            $small.parent().find('.range-block-title').append(buttonHTML);
            if (targetSampler.prop('id') === 'dry_sequence_breakers_textgenerationwebui') {
                $small.parent().find('.killSwitch').addClass('inline-block');
            };
            $(`#${buttonID}`).off().on('click', () => {
                $(`#${buttonID}`).toggleClass('toggleEnabled');
                targetSampler.parent().parent().toggleClass('deadSampler');
            });
        } else {
            $small.append(buttonHTML);
            $(`#${buttonID}`).off().on('click', () => {
                $(`#${buttonID}`).toggleClass('toggleEnabled');
                targetSampler.parent().toggleClass('deadSampler');
            });
        }
    });

    const masterToggleHTML = '<i id="toggleAllSamplers_button" class="masterKillSwitch fa-solid fa-power-off menu_button toggleEnabled togglable interactable" title="Toggle all samplers" tabindex="0"></i>';
    samplerHotButtonsContainer.prepend(masterToggleHTML);

    $('#toggleAllSamplers_button').off().on('click', function() {
        //console.error('Toggling all samplers');
        //console.error(samplerHotButtonsContainer.parent().find('.killSwitch').length);
        //console.error(samplerHotButtonsContainer);
        samplerHotButtonsContainer.parent().find('.killSwitch').parent().toggleClass('deadSampler');
        samplerHotButtonsContainer.parent().find('.killSwitch').toggleClass('toggleEnabled');
        $('#send_banned_tokens_textgenerationwebui').trigger('click');
        $(this).toggleClass('toggleEnabled');
    });

    console.error('RA-SamplerKillswitches loaded');
}

function updateDeadSamplersList() {
    const deadSamplers = [];
    samplerIDs.forEach((samplerID) => {
        const targetSampler = $(`#${samplerID}_textgenerationwebui`);
        if (samplerID === 'dry_sequence_breakers') {
            if ($('#dryBlock').find('.deadSampler').length > 0) {
                deadSamplers.push(samplerID);
            }
        } else if (targetSampler.parent().hasClass('deadSampler')) {
            deadSamplers.push(samplerID);
        }
    });
    return deadSamplers;
}

function filterSamplers(data) {
    const deadSamplers = updateDeadSamplersList();

    if (deadSamplers.length === 0) {
        console.debug('No dead samplers, skipping filtering');
        return;
    }

    // Iterate over data keys
    Object.keys(data).forEach((dataKey) => {
        // Get the corresponding setting_names key from keyMapping
        const mappedKey = keyMapping[dataKey];
        if (mappedKey && deadSamplers.includes(mappedKey)) {
            //console.error(`Deleting ${dataKey} from data (maps to ${mappedKey} in deadSamplers)`);
            //console.error(`Before: data[${dataKey}] =`, data[dataKey]);
            delete data[dataKey];
            //console.error(`After: data[${dataKey}] =`, data[dataKey]);
        } else {
            console.debug(`Keeping ${dataKey} in data (maps to ${mappedKey}, not in deadSamplers)`);
        }
    });

    console.error('Updated data:', data);

    // Optional: Trigger a new generation request
    // sendGenerationRequest(callParams); // Uncomment and define callParams if needed
    // generate(); // Uncomment only if safe and necessary
}

jQuery(() => {
    addKillSwitch(samplerIDs);
    eventSource.on(event_types.TEXT_COMPLETION_SETTINGS_READY, filterSamplers );
});
