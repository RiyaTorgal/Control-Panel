import { Button, Card, Container, Grid, Slider, Text } from '@mantine/core'
import { Gauge } from "lucide-react"
function App() {

  return (
    <>
    <div>
      <h1 style={{display: "flex", justifyContent: "center"}}>
        Control Panel
      </h1>
    </div>
    <Container>
        <Grid gutter="lg" mb="lg">
          <Grid.Col span={4}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={220} max={440} step={1}
                      marks={[
                        { value: 220, label: '220' },
                        { value: 330, label: '330' },
                        { value: 440, label: '440' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Vry Phase Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={220} max={440} step={1}
                      marks={[
                        { value: 220, label: '220' },
                        { value: 330, label: '330' },
                        { value: 440, label: '440' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Vyb Phase Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={220} max={440} step={1}
                      marks={[
                        { value: 220, label: '220' },
                        { value: 330, label: '330' },
                        { value: 440, label: '440' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Vbr Phase Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={39} max={59} step={1}
                      marks={[
                        { value: 39, label: '39' },
                        { value: 49, label: '49' },
                        { value: 59, label: '59' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Temperature Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={410} max={420} step={1}
                      marks={[
                        { value: 410, label: '410' },
                        { value: 415, label: '415' },
                        { value: 420, label: '420' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Current R Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={410} max={420} step={1}
                      marks={[
                        { value: 410, label: '410' },
                        { value: 415, label: '415' },
                        { value: 420, label: '420' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Current Y Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card
            shadow="sm"
            p="lg"
            radius="lg"
            // style={{ display: "flex", alignItems: "center" }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Gauge
                  style={{ marginRight: "1rem" }}
                  size={64}
                  strokeWidth={1}
                />
                </div>
                    <div>
                    <Slider
                      color="blue"
                      min={410} max={420} step={1}
                      marks={[
                        { value: 410, label: '410' },
                        { value: 415, label: '415' },
                        { value: 420, label: '420' },
                      ]}
                    />
                    <br></br>
                        <Text weight={500} size="lg" fw={400} style={{ display: "flex", textAlign: "center" }}>
                            Current B Slider
                        </Text>
                    </div>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button variant="filled" fullWidth color="green" size="xl">Start</Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button variant="filled" fullWidth color="red" size="xl">Stop</Button>
          </Grid.Col>
        </Grid>
        </Container>
    </>
  )
}

export default App
