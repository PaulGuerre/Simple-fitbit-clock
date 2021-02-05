const colIcons=['https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png','https://upload.wikimedia.org/wikipedia/fr/thumb/f/fe/Team_Liquid.svg/1200px-Team_Liquid.svg.png'];

function Colors(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Background color settings</Text>}>
        <ColorSelect
          settingsKey="bgColor"
          colors={[
            {color: 'tomato'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'deepskyblue'},
            {color: 'plum'}
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Text color settings</Text>}>
        <ColorSelect
          settingsKey="txtColor"
          colors={[
            {color: 'tomato'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'deepskyblue'},
            {color: 'plum'}
          ]}
        />
      </Section>
      <Section
        title={<Text bold align="center">Team selector</Text>}>
        <Toggle settingsKey="vitality" label="Team Vitality" />
        <Toggle settingsKey="liquid" label="Team Liquid" />
      </Section>
    </Page>
  );
}

registerSettingsPage(Colors);