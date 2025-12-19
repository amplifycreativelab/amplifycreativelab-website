import pandas as pd
import os

filename = 'amplifycreativelab.com-Performance-on-Search-2025-12-19.xlsx'

try:
    xl = pd.ExcelFile(filename)
    
    with open('seo_analysis_deep_dive.txt', 'w', encoding='utf-8') as f:
        # 1. Analyze Queries
        if 'Queries' in xl.sheet_names:
            df_q = pd.read_excel(filename, sheet_name='Queries')
            
            # Question Keywords
            questions = df_q[df_q['Top queries'].str.contains('how|what|why|when|where|guide|tips', case=False, na=False)]
            f.write("--- Opportunity: Informational/Question Queries ---\n")
            f.write(questions.sort_values('Impressions', ascending=False).head(10)[['Top queries', 'Impressions', 'Position']].to_string())
            f.write("\n\n")

            # "Near Me" or Location specific (not perth)
            geo = df_q[df_q['Top queries'].str.contains('near me|north|south|east|west|subiaco|fremantle|cottesloe', case=False, na=False)]
            f.write("--- Opportunity: Geo/Location Queries (Beyond just 'Perth') ---\n")
            f.write(geo.sort_values('Impressions', ascending=False).head(15)[['Top queries', 'Impressions', 'Position']].to_string())
            f.write("\n\n")
            
            # High Impression, Low CTR (Optimization targets)
            low_ctr = df_q[(df_q['Impressions'] > 50) & (df_q['CTR'] < 0.01)].sort_values('Impressions', ascending=False)
            f.write("--- Opportunity: Metadata Optimization (High Imp, Low CTR) ---\n")
            f.write(low_ctr.head(10)[['Top queries', 'CTR', 'Impressions', 'Position']].to_string())
            f.write("\n\n")

        # 2. Analyze Pages if available
        if 'Pages' in xl.sheet_names:
            df_p = pd.read_excel(filename, sheet_name='Pages')
            # Pages ranking on page 2 (11-20) with good traffic potential
            striking_pages = df_p[(df_p['Position'] >= 10) & (df_p['Position'] <= 25)].sort_values('Impressions', ascending=False)
            f.write("--- Opportunity: Underperforming Pages (Striking Distance) ---\n")
            f.write(striking_pages.head(10)[['Top pages', 'Impressions', 'Position', 'CTR']].to_string())
            f.write("\n\n")

except Exception as e:
    print(f"Error: {e}")
