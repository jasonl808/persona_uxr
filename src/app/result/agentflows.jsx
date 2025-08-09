const agentFlows = [
  {
    id: 1,
    name: 'Agent 1',
    persona: 'Early Adopter',
    flow: [
      {
        screenshot: 'root.png',
        thought: `Looking at this mobile carrier app screen, I can see various features and settings available. To turn off the "discovery mapping" feature, I need to access the app's settings or configuration options.
I can see several app icons at the bottom, including a "Settings" option in the bottom left corner. This would be the most logical place to find privacy and feature settings like discovery mapping.
I'll click on the Settings icon to access the app's configuration menu.`,
      },
      {
        screenshot: 'settings.png',
        thought: `Perfect! I'm now in the Settings menu. I can see various options, but I don't immediately see a "discovery mapping" setting on this main settings screen. Since this appears to be a mobile carrier app and discovery mapping is likely a privacy or network-related feature, it might be located within the SIM Settings section or could be part of a privacy/permissions menu that's not immediately visible.
Let me scroll down to see if there are more options below, as this screen might have additional settings that aren't currently visible.
I'll swipe up to scroll down and see more settings options.`,
      },
      {
        screenshot: 'settings_scrolled.png',
        thought: `Great! I can see more settings now after scrolling. I can see a "Security Settings" section which might contain privacy-related features like discovery mapping. However, I don't see the discovery mapping option directly visible yet. Let me continue scrolling down to see if there are more settings below, as discovery mapping could be in a privacy section or network settings that might be further down.
Let me scroll down more to see additional settings.`,
      },
      {
        screenshot: 'settings_scrolled.png',
        thought: `It looks like I've reached the bottom of the settings menu and haven't found a specific "discovery mapping" setting yet. Since discovery mapping is often related to location services or network features, it might be located in one of the sections I can access. Let me try going back to check the SIM Settings section, as network-related privacy features like discovery mapping are often found there.
Let me scroll back up to access the SIM Settings option.`,
      },
      {
        screenshot: 'sim_settings.png',
        thought: `I see I'm now in a SIM management screen with an "eSIM Setup" option that's marked as "COMPLETE". This doesn't seem to be the right place for discovery mapping settings either. Let me go back to the main settings screen and look for other options. I should check if there might be a Privacy section or Network settings that I missed.
Let me click the "Back" button to return to the settings menu.`,
      },
      {
        screenshot: 'settings.png',
        thought: `I'm back at the main settings screen. I notice there's a "Refresh Wi-Fi Profile" option under SIM Settings, which might be network-related. However, discovery mapping is often found in privacy or location settings. Let me check the "Fine Print" section, as this sometimes contains privacy policies and related settings where discovery mapping controls might be located.
Let me click on "Fine Print" to see if there are privacy-related settings there.`,
      },
      {
        screenshot: 'fine_print.png',
        thought: `Perfect! I can see the Fine Print section has several options, including "Privacy Notice" which is exactly what I need to look for discovery mapping settings. Privacy notices often contain controls for features like discovery mapping that relate to location tracking and data collection.
Let me click on "Privacy Notice" to access the privacy settings.`,
      },
      {
        state: 'failed',
        reason: 'Swtiched out of the app.',
      },
    ],
  },
  {
    id: 2,
    name: 'Agent 2',
    persona: 'Casual User',
    flow: [
      {
        screenshot: 'root.png',
        thought: `Looking at this mobile carrier app screen, I need to find the "discovery mapping" feature to turn it off. I can see various app icons and options available.

        I notice there's a "Mapping" app icon in the second row of icons. As a casual user who's not very familiar with smartphones, I think this might be related to the "discovery mapping" feature I need to turn off.

        Let me click on the Mapping icon to see if it leads me to the discovery mapping settings.
`,
      },
      {
        screenshot: 'mapping_intro_enabled.png',
        thought: `Perfect! I can see I'm now in the "Coverage Mapping" section, and this looks like what I was looking for. The screen explains that "Coverage Mapping provides Helium with signal strength and location usage data to better improve the network."
I can see there's a "Disable Mapping" button at the bottom of the screen. As a casual user who wants to turn off the "discovery mapping" feature, this seems to be exactly what I need to click on.
Let me click on "Disable Mapping".`,
      },
      {
        screenshot: 'mapping_enabled.png',
        thought: `Oh my! Now I can see a screen that says "Map the Network. Earn Tokens." and it's asking about enabling mapping by sharing my location. I can see there's a toggle switch for "Enable Mapping" and it appears to be turned ON (the switch is green and to the right).
As a casual user who wants to turn off the discovery mapping feature, I need to click on this toggle switch to turn it OFF. Let me tap on the toggle switch to disable it
.`,
      },
      {
        screenshot: 'mapping_disabled.png',
        thought: `Perfect! I can see that the toggle switch has now been turned OFF - it's now gray and positioned to the left, which means "Enable Mapping" is now disabled.
As a casual user who wanted to turn off the "discovery mapping" feature, I have successfully accomplished my goal! The mapping feature that was sharing my location data to help improve the Helium network has been disabled.
.`,
      },
      {
        state: 'success',
        reason: 'Task completed.',
      },
    ],
  },
  {
    id: 3,
    name: 'Agent 3',
    persona: 'Tech Savvy',
    flow: [
      {
        screenshot: 'root.png',
        thought: `Since I'm looking for a "discovery mapping" feature, this sounds like it would be related to location/mapping services. The most logical place to find this would be either in the "Mapping" section or in "Settings" where privacy and feature controls are typically located.
Given that this is a mapping-related feature, I'll start by clicking on the "Mapping" button to see if the discovery mapping controls are there.
Action: Click on Mapping Coordinates: (284, 955)
Reasoning: The Mapping button (green icon with a navigation arrow) is the most likely place to find discovery mapping settings, as it directly relates to location and mapping services that the carrier might offer.`,
      },
      {
        screenshot: 'mapping_intro_enabled.png',
        thought: `Perfect! I found the Coverage Mapping section, which appears to be the "discovery mapping" feature I was looking for. This screen shows that Coverage Mapping provides Helium with signal strength and location usage data to improve the network - this is exactly the type of discovery/data collection feature that needs to be turned off.
I can see there's a "Disable Mapping" button at the bottom of the screen, which is exactly what I need to accomplish my task.

Action: Click on Disable Mapping
Reasoning: This "Disable Mapping" button will turn off the discovery mapping feature that collects signal strength and location data. This matches perfectly with my goal of turning off the "discovery mapping" feature in the carrier app.`,
      },
      {
        screenshot: 'mapping_enabled.png',
        thought: `Perfect! I can see that clicking "Disable Mapping" brought me to a screen where I can control the mapping feature. I notice there's an "Enable Mapping" toggle switch that is currently turned ON (the toggle appears to be in the enabled/green position on the right side).
To accomplish my task of turning off the discovery mapping feature, I need to click on this toggle switch to disable it.

Action: Click on the Enable Mapping toggle switch.
Reasoning: The toggle switch for "Enable Mapping" is currently in the ON position (green and to the right). By clicking on this toggle, I will turn off the discovery mapping feature, which is exactly what I want to accomplish. This will disable the location sharing that enables the Helium Network mapping functionality.`,
      },
      {
        screenshot: 'mapping_disabled.png',
        thought: `Excellent! I have successfully completed the task. The toggle switch for "Enable Mapping" is now in the OFF position (I can see it's now gray and positioned to the left, indicating it's disabled).
The discovery mapping feature has been turned off, which means the app will no longer share location data to help map and improve the Helium Network. This accomplishes exactly what I was trying to do - disable the discovery mapping functionality in the mobile carrier app.`,
      },
      {
        state: 'success',
        reason: 'Task completed.',
      },
    ],
  },
  {
    id: 4,
    name: 'Agent 4',
    persona: 'Busy Businesswomen',
    flow: [
      {
        screenshot: 'root.png',
        thought: `I need to turn off a feature, so "Settings" is the obvious choice. I don't have time for anything else.`,
      },
      {
        screenshot: 'settings.png',
        thought: `I don't see "discovery mapping" here. I'll scroll down to see more options.`,
      },
      {
        screenshot: 'settings_scrolled.png',
        thought: `This isn't helpful at all. Where is the mapping setting? I've scrolled to the bottom and it's not here. I need to go back. I'll scroll back up to find the home button.`,
      },
      {
        screenshot: 'settings.png',
        thought: `I need to get back to the main screen. This settings page is a dead end. I'll click the home icon.`,
      },
      {
        screenshot: 'root.png',
        thought: `Okay, that was a waste of time. "Settings" should have settings! Since it doesn't, I guess the "Mapping" button itself is where I need to go. It's right there. Let's try that.`,
      },
      {
        screenshot: 'mapping_intro_enabled.png',
        thought: `Finally! There's the button. Let's disable this and be done with it.`,
      },
      {
        screenshot: 'mapping_enabled.png',
        thought: `This is confusing. I clicked "Disable Mapping" and it took me here? Whatever, I'm just going to toggle this off.`,
      },
      {
        screenshot: 'mapping_disabled.png',
        thought: `Good, it's off. Now let's get out of here. I'll hit the "Back" button.`,
      },
      {
        screenshot: 'mapping_intro_disabled.png',
        thought: `I'm back on this screen. It now says "Enable Mapping," which confirms it's turned off. I'm done here. Hitting "Back" again to get to the home screen.`,
      },
      {
        screenshot: 'root.png',
        thought: `Excellent. Task completed. I can finally get on with my day.`,
      },
      {
        state: 'semi-success',
        reason: 'Task completed, but many detours taken.',
      },
    ],
  },
  {
    id: 5,
    name: 'Agent 5',
    persona: 'Leisure User',
    flow: [
      {
        screenshot: 'root.png',
        thought: `The user's goal is to disable the "discovery mapping" feature. After examining the app's main screen, they identified both a "Mapping" icon and a "Settings" menu as potential locations for this control.
They reasoned that a feature toggle is more likely to be located in a general "Settings" menu rather than within the specific "Mapping" feature itself. Acting on this assumption, they prioritized and navigated into the "Settings" menu to begin their search. They are now exploring the options within Settings to find the switch.`,
      },
      {
        screenshot: 'settings.png',
        thought: `Reviewing Privacy Options
I'm presently on the Settings page, specifically searching for options related to mapping or privacy settings, as the user desires to disable the "discovery mapping" feature. I've begun scanning the available choices, starting with "SIM Settings" which seems irrelevant. My focus is now on any menu item hinting at location, privacy, or mapping features.

Scrutinizing Settings Menu
I've exhausted the visible options on the initial Settings screen, and now I'm preparing to scroll down to explore the rest. The screen size is 480x720, so I'll initiate a swipe gesture from (240, 400) to (240, 200). Hopefully, the hidden privacy and mapping options will be revealed. I am confident I will find the required option somewhere in the longer settings menu.
`,
      },
      {
        screenshot: 'settings_scrolled.png',
        thought: `After repeatedly failing to find a way back, the user abandons the goal of immediate navigation. Their reasoning shifts to exploring the only remaining path forward. They choose to click "Fine Print," not because they expect the toggle to be there, but with the hope that it might contain explanatory text or clues about the mapping feature, thus helping them understand the app's behavior better.
Action Justification:
The final action of clicking "Fine Print" is justified as a last resort. Since the user felt trapped and unable to execute their preferred plan (navigating back to the "Mapping" icon), they chose the only available action to make any progress, hoping it would yield information even if it wasn't the direct solution.`,
      },
      {
        screenshot: 'fine_print.png',
        thought: `The user navigated into the "Fine Print" section, hoping to find the setting to disable "discovery mapping." After exploring the options, they concluded this area only contains legal documents and terms of service, not interactive settings. Realizing this was a dead end, they decided the correct course of action was to go back to the previous Settings screen to continue their search in a more relevant area.
Action:
To go back to the previous screen, the user clicked the "← Back" button located in the top-left corner.
`,
      },
      {
        screenshot: 'settings.png',
        thought: `I've explored the "Fine Print" section and it wasn't the right place. Now I'm back on the main Settings screen.
My goal is to turn off "discovery mapping." This sounds like a network or data-related feature. The most relevant option on this screen seems to be "SIM Settings". I'll tap on "View SIM Setup" to see if the mapping setting is in there.`,
      },
      {
        screenshot: 'sim_settings.png',
        thought: `I'm trying to find the "discovery mapping" setting. I've navigated to the "Manage your SIM" page. It seems the only option here is to look into the "eSIM Setup", even though it says "COMPLETE". It's possible that more detailed settings are located inside this section. I will click on it.`,
      },
      {
        screenshot: 'sim_settings_next.png',
        thought: `This screen seems to be for installing a new SIM, not for managing the settings of an existing one. Since my goal is to find and disable the "discovery mapping" feature, which is a setting for my current plan, starting a new installation process is the wrong path.
I need to go back to the previous menu to find a more appropriate option. I will click the "← Back" button at the top left of the screen.`,
      },
      {
        screenshot: 'sim_settings.png',
        thought: `I'm clicking the Home icon in the top left corner.
Here's my reasoning: I've looked through the "Settings" menu, including the "Fine Print" and "SIM Settings" sections, and I haven't found the option to turn off "discovery mapping." This suggests the setting might be located in a different part of the app. Since my goal is related to mapping, I want to go back to the main home screen so I can try clicking the "Mapping" icon, which seems like a more direct place to find this feature.`,
      },
      {
        screenshot: 'root.png',
        thought: `I'm clicking on the "Mapping" icon.
My goal is to turn off the "discovery mapping" feature. I already checked the general "Settings" menu and couldn't find it there. Since the feature I want to change is specifically about mapping, clicking on the "Mapping" button on the home screen is the most logical next step. It's likely that settings related to the map function are located within that section of the app.`,
      },
      {
        screenshot: 'mapping_intro_enabled.png',
        thought: `I'm clicking the "Disable Mapping" button.
I've successfully found the correct screen for my task. The title is "Coverage Mapping," which is the feature I want to turn off. The screen shows that mapping is currently active, and there is a clear, unambiguous button at the bottom labeled "Disable Mapping." Clicking this button is the direct action needed to achieve my goal.`,
      },
      {
        screenshot: 'mapping_enabled.png',
        thought: `I'm clicking on the green toggle switch next to "Enable Mapping".
I've successfully navigated to the mapping settings. My goal is to turn this feature off. The screen shows a toggle switch for "Enable Mapping," and it's currently in the "on" position (indicated by the green color). To disable the feature, I need to tap this switch to turn it off. This action should complete my task.`,
      },
      {
        screenshot: 'mapping_intro_enabled.png',
        thought: `I have successfully turned off the "discovery mapping" feature. The toggle next to "Enable Mapping" is now gray and switched to the off position, confirming that the setting has been changed. My goal is complete.`,
      },
      {
        state: 'semi-success',
        reason: 'Task completed, but many detours taken.',
      },
    ],
  },
]

export default agentFlows
