
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
    dynatemp: 'dynatemp',
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
    json_schema: 'json_schema',
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
    n: 'n',
    n_predict: 'n_predict',
    negative_prompt: 'negative_prompt',
    nsigma: 'nsigma',
    num_beams: 'num_beams',
    num_predict: 'num_predict',
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
    max_new_tokens: 'max_new_tokens',
    max_tokens: 'max_tokens',
    json_schema: 'json_schema',
};

const skippedSamplers = [
    'send_banned_tokens',
    'streaming',
    'banned_tokens',
    'global_banned_tokens',
];

const blockStyleInputIDs = [
    'dry_sequence_breakers_textgenerationwebui',
    'guidance_scale_textgenerationwebui',
    'negative_prompt_textgenerationwebui',
    'tabby_json_schema',
    'logit_bias_textgenerationwebui',
    'grammar_string_textgenerationwebui',
];

function addKillSwitch(samplerIDs) {
    // Ensure samplerIDs is an array (since we now pass an array)
    if (!Array.isArray(samplerIDs)) {
        console.error('Error: samplerIDs must be an array, received:', samplerIDs);
        return;
    }


    samplerIDs.forEach((samplerID) => {
        let targetSampler;

        if (skippedSamplers.includes(samplerID)) {
            return;
        }

        targetSampler = $(`#${samplerID}_textgenerationwebui`);
        if (samplerID === 'json_schema') targetSampler = $("#tabby_json_schema");
        if (samplerID === 'logit_bias') targetSampler = $("#logit_bias_textgenerationwebui");
        //console.debug(`Processing samplerID: ${targetSampler.prop('id')}`);
        if (!targetSampler.length) {
            console.debug(`No element found with ID: ${samplerID}_textgenerationwebui`);
            return;
        }

        const buttonHTML = `<i id="${samplerID}_samplerKillswitch" class="killSwitch fa-solid fa-power-off menu_button toggleEnabled togglable margin0 interactable" title="Toggle this sampler" tabindex="0"></i>`;
        const buttonID = `${samplerID}_samplerKillswitch`;

        if (blockStyleInputIDs.includes(targetSampler.prop('id'))) {
            console.debug(`Found block-style input: ${targetSampler.prop('id')}`);
            var $smallBlock = $(`#${samplerID}_textgenerationwebui`).parent().find('small');
            if (samplerID === 'json_schema') {
                $smallBlock = $("#json_schema_block").find('h4');
            }
            if (samplerID === 'grammar_string') {
                $smallBlock = $("#grammar_block_ooba").find('h4').children().first();
            }

            if (samplerID === 'logit_bias') {
                console.debug('Special case for logit_bias, targeting h4');
                $smallBlock = $("#logit_bias_block_ooba").find('h4');
            }
            console.debug('$smallBlock:', $smallBlock);
            if (!$smallBlock.length) {
                console.debug(`No parent found for #${samplerID}_textgenerationwebui`);
                return;
            } else {
                console.debug('$smallBlock found:', $smallBlock, 'for', samplerID);
                $smallBlock.addClass('alignItemsBaseline flex-container justifyCenter');
                if (samplerID === 'logit_bias') {
                    $smallBlock.removeClass('justifyCenter');
                 }
                $smallBlock.append(buttonHTML);
                $(`#${buttonID}`).off().on('click', () => {
                    $(`#${buttonID}`).toggleClass('toggleEnabled');
                    targetSampler.parent().toggleClass('deadSampler');
                });
            }

        } else {
            var $small = $(`#${samplerID}_textgenerationwebui`).parent().find('small');

            if (!$small.length) {
                console.debug(`No parent found for #${samplerID}_textgenerationwebui`);
                return;
            }
            $small.append(buttonHTML);
            $small.addClass('flex-container alignItemsBaseline');
            $(`#${buttonID}`).off().on('click', () => {
                $(`#${buttonID}`).toggleClass('toggleEnabled');
                targetSampler.parent().toggleClass('deadSampler');

            });
        }
    });

    // Special case for Amount Gen block
    const $amtGenBlock = $("#amount_gen_block");
    const AmtGenButtonHTML = `<i id="amount_gen_samplerKillswitch" class="killSwitch fa-solid fa-power-off menu_button toggleEnabled togglable margin0 interactable" title="Toggle this sampler" tabindex="0"></i>`;
    $amtGenBlock.children().first().append(AmtGenButtonHTML).addClass('alignItemsBaseline flex-container justifyCenter');
    $(`#amount_gen_samplerKillswitch`).off().on('click', () => {
        console.log('Toggling Amount Gen sampler');
        $(`#amount_gen_samplerKillswitch`).toggleClass('toggleEnabled');
        $amtGenBlock.toggleClass('deadSampler');
    });
    console.log('[samplerKillSwitch] Added Amount Gen killswitch');

    //special case for dynatemp block
    const $dynatempBlock = $("#dynatemp_block_ooba");
    const $dynaTempMasterCheckboxContainer = $("#dynatemp_textgenerationwebui").parent().parent();

    const DynatempButtonHTML = `<i id="dynatemp_samplerKillswitch" class="killSwitch fa-solid fa-power-off menu_button toggleEnabled togglable margin0 interactable" title="Toggle this sampler" tabindex="0"></i>`;
    $dynaTempMasterCheckboxContainer.append(DynatempButtonHTML);
    $(`#dynatemp_samplerKillswitch`).off().on('click', () => {
        console.log('Toggling Dynatemp sampler');
        //$(`#dynatemp_samplerKillswitch`).toggleClass('toggleEnabled');
        $dynatempBlock.toggleClass('deadSampler');
        $dynatempBlock.find('.killSwitch').toggleClass('toggleEnabled');
        $("send_banned_tokens_textgenerationwebui").trigger('click'); //to trigger a data refresh
    });
    console.log('[samplerKillSwitch] Added Dynatemp killswitch');

    const masterToggleHTML = '<i id="toggleAllSamplers_button" class="masterKillSwitch fa-solid fa-power-off menu_button toggleEnabled togglable interactable" title="Toggle all samplers" tabindex="0"></i>';
    samplerHotButtonsContainer.prepend(masterToggleHTML);

    $('#toggleAllSamplers_button').off().on('click', function () {
        //console.debug('Toggling all samplers');
        //console.debug(samplerHotButtonsContainer.parent().find('.killSwitch').length);
        //console.debug(samplerHotButtonsContainer);
        samplerHotButtonsContainer.parent().find('.killSwitch').parent().parent().toggleClass('deadSampler');
        samplerHotButtonsContainer.parent().find('.killSwitch').toggleClass('toggleEnabled');

        $("#amount_gen_block").toggleClass('deadSampler'); //for amount_gen
        $("#amount_gen_block").find('.killSwitch').toggleClass('toggleEnabled');

        //because banned strings has its own native killswitch
        $('#send_banned_tokens_label').find('i').trigger('click');
        $(this).toggleClass('toggleEnabled');
    });

    console.log('RA-SamplerKillswitches loaded');
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
        } else if (samplerID === 'negative_prompt') {
            if ($('#negative_prompt_textgenerationwebui').parent().children().first().hasClass('deadSampler')) {
                deadSamplers.push(samplerID);
            }
        } else if (samplerID === 'grammar_string') {
            console.debug('Checking grammar_string dead status', $('#grammar_block_ooba').hasClass('deadSampler'));
            if ($('#grammar_block_ooba').find('h4').hasClass('deadSampler')) {
                console.debug('saw grammar_string as dead');
                deadSamplers.push(samplerID);
            }
        } else if (samplerID === 'json_schema') {
            console.debug('Checking json_schema dead status', $('#json_schema_block').find('h4').hasClass('deadSampler'));
            if ($('#json_schema_block').hasClass('deadSampler')) {
                deadSamplers.push(samplerID);
            }
        }

    });
    //special case for amount_gen
    const isAmtGenKilled = $('#amount_gen_block').hasClass('deadSampler');
        if (isAmtGenKilled) {
            console.log('saw amount_gen as dead');
            deadSamplers.push('max_new_tokens');
            deadSamplers.push('max_tokens');
            deadSamplers.push('n_predict');
            deadSamplers.push('num_predict');
        }

    return deadSamplers;
}

function filterSamplers(data) {
    const deadSamplers = updateDeadSamplersList();
    console.debug('Dead samplers:', deadSamplers);
    console.debug('Original data:', data);

    if (deadSamplers.length === 0) {
        console.debug('No dead samplers, skipping filtering');
        return;
    }

    // Iterate over data keys
    Object.keys(data).forEach((dataKey) => {
        // Get the corresponding setting_names key from keyMapping
        const mappedKey = keyMapping[dataKey];
        if (mappedKey && deadSamplers.includes(mappedKey)) {
            console.debug(`Deleting ${dataKey} from data (maps to ${mappedKey} in deadSamplers)`);
            console.debug(`Before: data[${dataKey}] =`, data[dataKey]);
            delete data[dataKey];
            console.debug(`After: data[${dataKey}] =`, data[dataKey]);
        } else {
            console.debug(`Keeping ${dataKey} in data (maps to ${mappedKey}, not in deadSamplers)`);
        }
    });

    if (deadSamplers.includes('mirostat_mode')) {
        delete data['mirostat'];
    }

    //remove banned_Strings based on the power-off class inside send_banned_tokens_label
    if (!$('#send_banned_tokens_label').find('i').hasClass('toggleEnabled')) {
        console.debug('Removing banned_strings from data due to send_banned_tokens being off');
        delete data['banned_strings'];
        delete data['custom_token_bans'];
    }

    console.debug('Updated data:', data);
}

jQuery(async () => {
    addKillSwitch(samplerIDs);
    eventSource.on(event_types.TEXT_COMPLETION_SETTINGS_READY, filterSamplers);

});
