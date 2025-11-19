<script>
    // dropdown tone and voice
    
    export let selectedTone = '';
    export let selectedVoice = '';
    
    let showToneDropdown = false;
    let showVoiceDropdown = false;
    
    const toneOptions = ['1', '2', '3', '4', '5', '6'];
    const voiceOptions = ['1', '2', '3', '4', '5', '6'];
    
    function selectTone(tone) {
        selectedTone = tone;
        showToneDropdown = false;
        dispatch('toneSelect', { tone });
    }

    function selectVoice(voice) {
        selectedVoice = voice;
        showVoiceDropdown = false;
        dispatch('voiceSelect', { voice });
    }
    
    // closes when other opens
    function toggleToneDropdown() {
        showToneDropdown = !showToneDropdown;
        showVoiceDropdown = false;
    }
    
    function toggleVoiceDropdown() {
        showVoiceDropdown = !showVoiceDropdown;
        showToneDropdown = false;
    }
    
</script>

<style>
    .dropdown-container {
        background: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 25px;
        height: fit-content;
         box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .dropdown-title {
        font-weight: bold;
        margin-bottom: 20px;
        color: #333;
        font-size: 18px;
        text-align: center;
    }

    .dropdown-row {
        display: flex;
        flex-direction: row;
        gap: 15px;
        width: 100%;
    }

    .tone-selector, .voice-selector {
        position: relative;
        width: 100%;
        z-index: 100;
    }

    .tone-button, .voice-button {
        padding: 12px 16px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background-color: white;
        cursor: pointer;
        font-weight: 500;
        width: 100%;
        text-align: left;
        font-size: 15px;
    }

    .tone-button:hover, .voice-button:hover {
        background-color: #f5f5f5;
        background: #e9f7fe;
         transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-color: #3BB3FF;
    }

    .tone-dropdown, .voice-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        margin-top: 5px;
        max-height: 200px;
        overflow-y: auto;
    }

    .tone-option, .voice-option {
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid #f0f0f0;
        font-size: 15px;
    }

    .tone-option:hover, .voice-option:hover {
        background-color: #e9f7fe;
        color: #3BB3FF;
    }

</style>

<div class="dropdown-container">
    <div class="dropdown-title">Sound Options</div>
    <div class="dropdown-row">
        <div class="tone-selector">
            <button class="tone-button" on:click={toggleToneDropdown}>
                {selectedTone || 'Select Tone'}
            </button>
            {#if showToneDropdown}
                <div class="tone-dropdown">
                    {#each toneOptions as tone}
                        <div class="tone-option" on:click={() => selectTone(tone)}>
                            {tone}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <div class="voice-selector">
            <button class="voice-button" on:click={toggleVoiceDropdown}>
                {selectedVoice || 'Select Voice'}
            </button>
            {#if showVoiceDropdown}
                <div class="voice-dropdown">
                    {#each voiceOptions as voice}
                        <div class="voice-option" on:click={() => selectVoice(voice)}>
                            {voice}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>