const colIcons=['https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png','https://upload.wikimedia.org/wikipedia/fr/thumb/f/fe/Team_Liquid.svg/1200px-Team_Liquid.svg.png'];

function Colors(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Background color settings</Text>}>
        <ColorSelect
          settingsKey="bgColor"
          colors={[
            {color: "black"},
            {color: "darkslategrey"},
            {color: "dimgrey"},
            {color: "grey"},
            {color: "lightgrey"},
            {color: "beige"},
            {color: "white"},
            {color: "maroon"},
            {color: "saddlebrown"},
            {color: "darkgoldenrod"},
            {color: "goldenrod"},
            {color: "rosybrown"},
            {color: "wheat"},
            {color: "navy"},
            {color: "blue"},
            {color: "dodgerblue"},
            {color: "deepskyblue"},
            {color: "aquamarine"},
            {color: "cyan"},
            {color: "olive"},
            {color: "darkgreen"},
            {color: "green"},
            {color: "springgreen"},
            {color: "limegreen"},
            {color: "palegreen"},
            {color: "lime"},
            {color: "greenyellow"},
            {color: "darkslateblue"},
            {color: "slateblue"},
            {color: "purple"},
            {color: "fuchsia"},
            {color: "plum"},
            {color: "orchid"},
            {color: "lavender"},
            {color: "darkkhaki"},
            {color: "khaki"},
            {color: "lemonchiffon"},
            {color: "yellow"},
            {color: "gold"},
            {color: "orangered"},
            {color: "orange"},
            {color: "coral"},
            {color: "lightpink"},
            {color: "palevioletred"},
            {color: "deeppink"},
            {color: "darkred"},
            {color: "crimson"},
            {color: "red"}      
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Text color settings</Text>}>
        <ColorSelect
          settingsKey="txtColor"
          colors={[
            {color: "black"},
            {color: "darkslategrey"},
            {color: "dimgrey"},
            {color: "grey"},
            {color: "lightgrey"},
            {color: "beige"},
            {color: "white"},
            {color: "maroon"},
            {color: "saddlebrown"},
            {color: "darkgoldenrod"},
            {color: "goldenrod"},
            {color: "rosybrown"},
            {color: "wheat"},
            {color: "navy"},
            {color: "blue"},
            {color: "dodgerblue"},
            {color: "deepskyblue"},
            {color: "aquamarine"},
            {color: "cyan"},
            {color: "olive"},
            {color: "darkgreen"},
            {color: "green"},
            {color: "springgreen"},
            {color: "limegreen"},
            {color: "palegreen"},
            {color: "lime"},
            {color: "greenyellow"},
            {color: "darkslateblue"},
            {color: "slateblue"},
            {color: "purple"},
            {color: "fuchsia"},
            {color: "plum"},
            {color: "orchid"},
            {color: "lavender"},
            {color: "darkkhaki"},
            {color: "khaki"},
            {color: "lemonchiffon"},
            {color: "yellow"},
            {color: "gold"},
            {color: "orangered"},
            {color: "orange"},
            {color: "coral"},
            {color: "lightpink"},
            {color: "palevioletred"},
            {color: "deeppink"},
            {color: "darkred"},
            {color: "crimson"},
            {color: "red"}      
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Team selector</Text>}>
        <Toggle settingsKey="vitality" label="Team Vitality" onChange={() => props.settingsStorage.clear()}/>
        <Toggle settingsKey="liquid" label="Team Liquid" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="g2" label="G2" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="astralis" label="Astralis" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="mibr" label="MIBR" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="og" label="OG" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="solary" label="Solary" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="fnatic" label="Fnatic" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="navi" label="NAVI" onChange={() => props.settingsStorage.clear()} />
        <Toggle settingsKey="droso" label="Droso Crew" onChange={() => props.settingsStorage.clear()} />
      </Section>
    </Page>
  );
}

registerSettingsPage(Colors);