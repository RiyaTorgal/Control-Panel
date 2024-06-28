import { Button, Card, Container, Grid, Slider, Text } from '@mantine/core'
import { Gauge } from "lucide-react"
import { useState } from 'react'
function App() {

  const [vry, setVry] = useState(330)
  const [Vyb, setVyb] = useState(330)
  const [Vbr, setVbr] = useState(330)
  const [Temp, setTemp] = useState(39)
  const [Cr, setCr] = useState(2)
  const [Cy, setCy] = useState(2)
  const [Cb, setCb] = useState(2)


  const handleClick = ()=>{
    console.log(vry)
    console.log(Vyb)
    console.log(Vbr)
    console.log(Temp)
    console.log(Cr)
    console.log(Cy)
    console.log(Cb)
  }

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
                      value={vry}
                      onChange={setVry}
                      min={330} max={440} step={1}
                      marks={[
                        { value: 330, label: '330' },
                        { value: 385, label: '385' },
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
                      value={Vyb}
                      onChange={setVyb}
                      min={330} max={440} step={1}
                      marks={[
                        { value: 330, label: '330' },
                        { value: 385, label: '385' },
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
                      value={Vbr}
                      onChange={setVbr}
                      min={330} max={440} step={1}
                      marks={[
                        { value: 330, label: '330' },
                        { value: 385, label: '385' },
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
                      value={Temp}
                      onChange={setTemp}
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
                      value={Cr}
                      onChange={setCr}
                      min={2} max={15} step={1}
                      marks={[
                        { value: 2, label: '2' },
                        { value: 8, label: '8' },
                        { value: 15, label: '15' },
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
                      value={Cy}
                      onChange={setCy}
                      min={2} max={15} step={1}
                      marks={[
                        { value: 2, label: '2' },
                        { value: 8, label: '8' },
                        { value: 15, label: '15' },
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
                      value={Cb}
                      onChange={setCb}
                      min={2} max={15} step={1}
                      marks={[
                        { value: 2, label: '2' },
                        { value: 8, label: '8' },
                        { value: 15, label: '15' },
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
            <Button onClick={handleClick} variant="filled" fullWidth color="green" size="xl">Start</Button>
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
