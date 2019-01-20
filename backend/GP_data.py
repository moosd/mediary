import requests
import json

requests.packages.urllib3.util.ssl_.DEFAULT_CIPHERS += ':ADH-AES128-SHA256'
cert_file_path = "C:\Users\suhaa\OneDrive - University Of Cambridge\HackCambridge\Postman\HackCambridgeDemoUser.crt"
key_file_path = "C:\Users\suhaa\OneDrive - University Of Cambridge\HackCambridge\Postman\HackCambridgeDemoUser.key"

cert = (cert_file_path, key_file_path)

url = "https://systmoneukdemo1.tpp-uk.com/SystmOneMHS/NHSConnect/Z12345/DSTU2/1/Patient/$gpc.getcarerecord"

payload = "{\r\n\t\"resourceType\":\"Parameters\",\r\n\t\"meta\":\r\n\t{\r\n\t\t\"profile\":\r\n\t\t[\r\n\t\t\t\"http://fhir.nhs.net/OperationDefinition/gpconnect-carerecord-operation-1\"\r\n\t\t]\r\n\t},\r\n\t\"parameter\":\r\n\t[\r\n\t\t{\r\n\t\t\t\"name\":\"patientNHSNumber\",\r\n\t\t\t\"valueIdentifier\":\r\n\t\t\t{\r\n\t\t\t\t\"system\":\"http://fhir.nhs.net/Id/nhs-number\",\r\n\t\t\t\t\"value\":\"6656336566\"\r\n\t\t\t}\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"name\":\"recordSection\",\r\n\t\t\t\"valueCodeableConcept\":\r\n\t\t\t{\r\n\t\t\t\t\"coding\":\r\n\t\t\t\t[\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"system\":\"http://fhir.nhs.net/ValueSet/gpconnect-record-section-1\",\r\n\t\t\t\t\t\t\"code\":\"SUM\"\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t}\r\n\t]\r\n}"
headers = {
    'Authorization': "Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL3d3dy50cHAtdWsuY29tIiwic3ViIjoiMTcyODEwMDAwMDAwMDAwMCIsImF1ZCI6Imh0dHBzOi8vYXV0aG9yaXplLmZoaXIubmhzLm5ldC90b2tlbiIsImV4cCI6MTkwMDAwMDMwMCwiaWF0IjoxOTAwMDAwMDAwLCJyZWFzb25fZm9yX3JlcXVlc3QiOiJkaXJlY3RjYXJlIiwicmVxdWVzdGVkX3JlY29yZCI6eyJyZXNvdXJjZVR5cGUiOiJQYXRpZW50IiwiaWRlbnRpZmllciI6W3sic3lzdGVtIjoiaHR0cDovL2ZoaXIubmhzLm5ldC9JZC9uaHMtbnVtYmVyIiwidmFsdWUiOiI2NjU2MzM2NTY2In1dfSwicmVxdWVzdGVkX3Njb3BlIjoicGF0aWVudC8qLnJlYWQiLCJyZXF1ZXN0aW5nX2RldmljZSI6eyJyZXNvdXJjZVR5cGUiOiJEZXZpY2UiLCJpZCI6IjEiLCJtZXRhIjp7InByb2ZpbGUiOlsiaHR0cDovL2ZoaXIubmhzLm5ldC9TdHJ1Y3R1cmVEZWZpbml0aW9uL2dwY29ubmVjdC1kZXZpY2UtMSJdLCJ2ZXJzaW9uSWQiOiIxIn0sImlkZW50aWZpZXIiOlt7InN5c3RlbSI6IlRQUCIsInZhbHVlIjoiVFBQIn1dLCJ0eXBlIjp7ImNvZGluZyI6W3sic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCIsImNvZGUiOiI0NjIyNDAwMDAiLCJkaXNwbGF5IjoiUGF0aWVudCBoZWFsdGggcmVjb3JkIGluZm9ybWF0aW9uIHN5c3RlbSAocGh5c2ljYWwgb2JqZWN0KSJ9XX19LCJyZXF1ZXN0aW5nX29yZ2FuaXphdGlvbiI6eyJyZXNvdXJjZVR5cGUiOiJPcmdhbml6YXRpb24iLCJpZCI6ImE3ZDAwMDAwMDAwMDAwMDAiLCJtZXRhIjp7InByb2ZpbGUiOlsiaHR0cDovL2ZoaXIubmhzLm5ldC9TdHJ1Y3R1cmVEZWZpbml0aW9uL2dwY29ubmVjdC1vcmdhbml6YXRpb24tMSJdfSwiaWRlbnRpZmllciI6W3sic3lzdGVtIjoiaHR0cDovL2ZoaXIubmhzLm5ldC9JZC9vZHMtb3JnYW5pemF0aW9uLWNvZGUiLCJ2YWx1ZSI6IkE4NDAxOCJ9XSwibmFtZSI6IkNvcmJyaWRnZSBIZWFsdGggQ2VudHJlIn0sInJlcXVlc3RpbmdfcHJhY3RpdGlvbmVyIjp7InJlc291cmNlVHlwZSI6IlByYWN0aXRpb25lciIsImlkIjoiMTcyODEwMDAwMDAwMDAwMCIsIm1ldGEiOnsicHJvZmlsZSI6WyJodHRwOi8vZmhpci5uaHMubmV0L1N0cnVjdHVyZURlZmluaXRpb24vZ3Bjb25uZWN0LXByYWN0aXRpb25lci0xIl19LCJpZGVudGlmaWVyIjpbeyJzeXN0ZW0iOiJodHRwOi8vZmhpci5uaHMubmV0L0lkL3Nkcy11c2VyLWlkIiwidmFsdWUiOiIxNDIxNDIxNDIxNDIifSx7InN5c3RlbSI6Imh0dHA6Ly9maGlyLm5ocy5uZXQvc2RzLXVzZXItaWQiLCJ2YWx1ZSI6IjE0MjE0MjE0MjE0MiJ9XSwibmFtZSI6eyJwcmVmaXgiOlsiTXIiXSwiZ2l2ZW4iOlsiQm9iIl0sImZhbWlseSI6WyJXaWxzb24iXX0sInByYWN0aXRpb25lclJvbGUiOlt7InJvbGUiOnsiY29kaW5nIjpbeyJzeXN0ZW0iOiJodHRwOi8vZmhpci5uaHMubmV0L1ZhbHVlU2V0L3Nkcy1qb2Itcm9sZS1uYW1lLTEiLCJjb2RlIjoiUzAwMTA6RzAwMzA6UjAyNDAiLCJkaXNwbGF5IjoiJ090aGVyJyBDb21tdW5pdHkgSGVhbHRoIFNlcnZpY2UifV19fV19fQ.",
    'Content-Type': "application/json+fhir",
    'Accept': "application/json+fhir",
    'Accept-Encoding': "gzip",
    'Host': "localhost",
    'Ssp-From': "A84018",
    'Ssp-InteractionID': "urn:nhs:names:services:gpconnect:fhir:operation:gpc.getcarerecord",
    'Ssp-To': "123456",
    'Ssp-TraceID': "EE48E4B0-E419-11E8-884B-5F95BA9F6662",
    'cache-control': "no-cache",
    'Postman-Token': "b6528b1f-5f5b-4a8f-ae8b-3505515a6711"
    }

response = requests.request("POST", url, data=payload, headers=headers, cert=cert, verify=False)

# get basic patient profile data

data = response.json()

namedict = data['entry'][1]['resource']['name'][0]

first_name = namedict['given'][0]
last_name = namedict['family'][0]
birth_date = data['entry'][1]['resource']['birthDate']
gender = data['entry'][1]['resource']['gender']
nhs_number = data['entry'][1]['resource']['identifier'][0]['value']

print'First Name: ', first_name
print'Last Name: ', last_name
print'DOB: ', birth_date
print'Gender: ', gender
print 'NHS Number: ', nhs_number

# get patient care record

#care_record = data['entry'][0]['resource']['section'][0]['text']['div']
care_record = """<div><h2>Active Problems and Issues</h2><table><thead><tr><th>Start Date</th><th>Entry</th><th>Significance</th><th>Details</th></tr></thead><tbody><tr><td>12 Nov 2017</td><td>Anxiety attack (Xa7kB)</td><td>Major Episode</td><td></td></tr><tr><td>01 Jan 1965</td><td>Type I diabetes mellitus (X40J4)</td><td>Major Episode</td><td></td></tr></tbody></table></div><div><h2>Current Medication Issues</h2><p>No 'Current Medication Issues' data is recorded for this patient.</p></div><div><h2>Current Repeat Medications</h2><table><thead><tr><th>Last Issued</th><th>Medication Item</th><th>Start Date</th><th>Review Date</th><th>Number Issued</th><th>Max Issues</th><th>Details</th></tr></thead><tbody><tr><td>07 Nov 2018</td><td>Apidra 100units/ml solution for injection 3ml pre-filled SoloStar pen (Sanofi) - 1 pre-filled disposable injection - use as directed with evening meal</td><td>07 Nov 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>20 Jan 2018</td><td>Lantus 100units/ml solution for injection 3ml cartridges
(Sanofi) - 1.667 cartridge - use as directed</td><td>20 Jan 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>20 Jan 2018</td><td>Gliclazide 80mg/5ml oral suspension - 150 ml - With breakfast</td><td>20 Jan 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>15 Jan 2018</td><td>Atorvastatin 20mg tablets - 28 tablet - To be taken Each Night</td><td>15 Jan 2018</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>22 Nov 2017</td><td>Metformin 500mg modified-release tablets - 56 tablet -
with evening meal</td><td>22 Nov 2017</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>16 Nov 2017</td><td>Propranolol
80mg tablets - 56 tablet - take one twice daily</td><td>16 Nov 2017</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>16 Nov 2017</td><td>Insulin protamine zinc bovine 100units/ml suspension for injection 10ml vials - 2.8 vial - use as directed</td><td>12 Nov 2017</td><td>12 May 2019</td><td>2</td><td></td><td></td></tr><tr><td>12 Nov 2017</td><td>Venlafaxine 75mg modified-release capsules - 28 capsule - take one daily</td><td>12 Nov 2017</td><td>12 May 2019</td><td>1</td><td></td><td></td></tr><tr><td>Never</td><td>Sertraline 100mg tablets - 28 tablet - Every Day</td><td>30 Nov 2017</td><td>12 May 2019</td><td>0</td><td></td><td></td></tr><tr><td>Never</td><td>Sumatriptan 50mg tablets - 28 tablet - take one as directed</td><td>12 Nov 2018</td><td>12 May 2019</td><td>0</td><td></td><td></td></tr><tr><td>Never</td><td>Cetirizine 10mg tablets - 30 tablet - take one daily</td><td>12 Nov 2018</td><td>12 May 2019</td><td>0</td><td></td><td></td></tr></tbody></table></div><br/><b>The medication above is taken from a list of Repeat Medication Templates in
the patient record which may have been amended since they were last issued.<br/>You should look at the Current Medication Issues section to see what the patient has been given.</b><div><h2>Current Allergies and Adverse Reactions</h2><table><thead><tr><th>Start Date</th><th>Details</th></tr></thead><tbody><tr><td>14 Nov 2018</td><td>MORPHINE SULFATE (all components considered allergens - Morphine sulfate 20mg/1ml solution for injection ampoules)<br/>Makes him Sick</td></tr><tr><td>14 Nov 2018</td><td>ASPIRIN (all components considered
allergens - Aspirin 75mg dispersible tablets)<br/>Has Rash</td></tr><tr><td>14 Nov 2018</td><td>Allergic reaction to drug (Xa1pS)</td></tr><tr><td>14 Nov 2018</td><td>Allergic reaction to drug (Xa1pS) - allergic to morphine sulfate</td></tr><tr><td>16 Nov 2017</td><td>CO-CODAMOL (all components considered allergens - Co-codamol 30mg/500mg tablets)<br/>Induces rash</td></tr></tbody></table></div><div><h2>Last 3 Encounters</h2><table><thead><tr><th>Date</th><th>Title</th><th>Details</th></tr></thead><tbody><tr><td>14 Nov 2018</td><td>Lee Edwards ('Other' Community Health Service)  - Broad Walk Medical Practice</td><td>Hepatitis B Immunoglobulin (HBIG) 1 0.5 ml<br/>Drugs not printed - 14 Nov 2018: Hepatitis B immunoglobulin human 200unit solution for injection vials <br/>Vaccination Consent: HEPATITIS
B IMMUNOGLOBULIN (Consented)<br/>Hepatitis B immunoglobulin human 200unit solution for injection vials - 0.5 ml - <br/>Parent present (Y1605)<br/></td></tr><tr><td>14 Nov 2018</td><td>Lee Edwards ('Other' Community Health Service)  - Broad Walk Medical Practice</td><td>Sensitivity: ASPIRIN (all components considered allergens - Aspirin 75mg dispersible tablets) - Has Rash<br/>Allergic reaction to drug
(Xa1pS) - allergic to morphine sulfate<br/></td></tr><tr><td>14 Nov 2018</td><td>Lee Edwards ('Other' Community Health Service)  - Broad Walk Medical Practice</td><td>Diagnosis: Allergic reaction to drug (Xa1pS)to asprin<br/></td></tr></tbody></table></div></div>"""


print json.dumps(care_record)


